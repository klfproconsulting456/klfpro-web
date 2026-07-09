import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "../common/prisma.service";
import { CreateLeadDto } from "./dto/create-lead.dto";
import { InjectQueue } from "@nestjs/bullmq";
import { Queue } from "bullmq";

@Injectable()
export class LeadsService {
  constructor(
    private readonly prisma: PrismaService,
    @InjectQueue("leads") private readonly leadsQueue: Queue
  ) {}

  async create(dto: CreateLeadDto) {
    const slug = dto.loanTypeSlug.trim().toLowerCase();
    const loanType = await this.prisma.loanType.findUnique({ where: { slug } });
    if (!loanType) {
      throw new BadRequestException(`Unknown loan type: ${dto.loanTypeSlug}`);
    }

    try {
      const addJob = this.leadsQueue.add("create-lead", {
        fullName: dto.fullName.trim(),
        phone: dto.phone.trim(),
        email: dto.email.trim().toLowerCase(),
        loanTypeId: loanType.id,
        message: dto.message?.trim() || null,
        loanAmount: dto.loanAmount,
        monthlyIncome: dto.monthlyIncome,
        employmentType: dto.employmentType,
        existingEmi: dto.existingEmi
      });

      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Redis Queue Timeout")), 1500)
      );

      await Promise.race([addJob, timeoutPromise]);
    } catch (error) {
      console.warn("Redis is offline! Saving lead synchronously to PostgreSQL instead.");
      await this.prisma.lead.create({
        data: {
          fullName: dto.fullName.trim(),
          phone: dto.phone.trim(),
          email: dto.email.trim().toLowerCase(),
          loanTypeId: loanType.id,
          message: dto.message?.trim() || null,
          loanAmount: dto.loanAmount,
          monthlyIncome: dto.monthlyIncome,
          employmentType: dto.employmentType,
          existingEmi: dto.existingEmi
        }
      });
    }

    return { success: true, message: "Lead queued successfully for processing" };
  }

  async listRecent(take = 50) {
    return this.prisma.lead.findMany({
      take,
      orderBy: { createdAt: "desc" },
      include: {
        loanType: { select: { slug: true, title: true } }
      }
    });
  }

  async findByPhone(phone: string) {
    return this.prisma.lead.findMany({
      where: { phone },
      include: { 
        loanType: true,
        timeline: {
          orderBy: { createdAt: 'asc' }
        }
      },
      orderBy: { createdAt: "desc" }
    });
  }

  async getAllSeoPages() {
    return this.prisma.seoPage.findMany({
      select: { slug: true, updatedAt: true },
      where: { isActive: true }
    });
  }

  async getSeoPage(slug: string) {
    // Layer 3: Database query (which we treat as L2 for simplicity since Prisma caches queries locally, and index handles millions)
    let page = await this.prisma.seoPage.findUnique({ where: { slug } });

    // Scenario A: High Quality Page Available
    if (page && page.qualityScore >= 85) {
      return { ...page, status: "SERVE_CACHE" };
    }

    const parts = slug.split("-");
    const city = parts[parts.length - 1];
    const service = parts.slice(0, -1).join(" ");

    // Basic Validation: If it doesn't look like a valid structure
    if (parts.length < 2 || city?.length < 3) {
      // Scenario C: Completely Unknown URL -> Return 404
      return null;
    }

    // Scenario B: Page exists but quality < 85%, or doesn't exist yet
    // Trigger AI Regeneration Job
    const jobExists = await this.prisma.seoGenerationJob.findUnique({ where: { slug } });
    if (!jobExists) {
      await this.prisma.seoGenerationJob.create({
        data: { slug, city, service }
      });
    }

    if (page && page.qualityScore < 85) {
      // Log failure
      await this.prisma.seoQualityFailure.upsert({
        where: { slug },
        update: { score: page.qualityScore, reasons: ["Automatic periodic regeneration"] },
        create: { slug, score: page.qualityScore, reasons: ["Initial quality failure"] }
      });
    }

    // Serve High-Quality Fallback Template + Add noindex flag
    return {
      id: page?.id || "fallback",
      slug,
      city: city.charAt(0).toUpperCase() + city.slice(1),
      service: service.charAt(0).toUpperCase() + service.slice(1),
      title: `${service.charAt(0).toUpperCase() + service.slice(1)} in ${city.charAt(0).toUpperCase() + city.slice(1)} - Apply Online`,
      metaDescription: `Apply for ${service} in ${city}. Fast approvals and lowest interest rates.`,
      h1: `${service.charAt(0).toUpperCase() + service.slice(1)} in ${city.charAt(0).toUpperCase() + city.slice(1)}`,
      content: `<p>We are currently updating our comprehensive guide for ${service} in ${city}. Please use the application form to proceed.</p>`,
      interestRate: 10.5,
      faqs: [
        { question: `Can I get a ${service} in ${city}?`, answer: `Yes, we provide ${service} across all major areas in ${city}.` }
      ],
      qualityScore: page?.qualityScore || 0,
      isActive: true,
      createdAt: page?.createdAt || new Date(),
      updatedAt: page?.updatedAt || new Date(),
      status: "FALLBACK_NOINDEX" 
    };
  }
}
