import { Body, Controller, Get, Param, Patch, UseGuards, SetMetadata } from "@nestjs/common";
import { PrismaService } from "../common/prisma.service";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { RolesGuard } from "../auth/roles.guard";

@Controller("admin")
@UseGuards(JwtAuthGuard, RolesGuard)
@SetMetadata("roles", ["ADMIN"])
export class AdminController {
  constructor(private readonly prisma: PrismaService) {}

  @Get("dashboard")
  async dashboard() {
    const [totalLeads, applicationsInProgress, approved] = await Promise.all([
      this.prisma.lead.count(),
      this.prisma.loanApplication.count({
        where: { status: { notIn: ["APPROVED", "REJECTED", "CLOSED"] } }
      }),
      this.prisma.loanApplication.count({ where: { status: "APPROVED" } })
    ]);
    return { totalLeads, applicationsInProgress, approved };
  }

  @Get("leads")
  async getLeads() {
    return this.prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        loanType: { select: { title: true } }
      }
    });
  }

  @Get("analytics")
  async getAnalytics() {
    const leads = await this.prisma.lead.findMany({
      include: {
        loanType: { select: { title: true } }
      }
    });

    const statusCounts: Record<string, number> = {};
    const productCounts: Record<string, number> = {};

    for (const lead of leads) {
      statusCounts[lead.status] = (statusCounts[lead.status] || 0) + 1;
      const product = lead.loanType?.title || "Unknown";
      productCounts[product] = (productCounts[product] || 0) + 1;
    }

    return {
      byStatus: Object.entries(statusCounts).map(([name, value]) => ({ name, value })),
      byProduct: Object.entries(productCounts).map(([name, value]) => ({ name, value }))
    };
  }

  @Patch("leads/:id/status")
  async updateLeadStatus(@Param("id") id: string, @Body("status") status: string) {
    return this.prisma.lead.update({
      where: { id },
      data: { status }
    });
  }

  @Get("seo-health")
  async getSeoHealth() {
    const [failures, queue, regenerated] = await Promise.all([
      this.prisma.seoQualityFailure.findMany({ orderBy: { score: 'asc' }, take: 50 }),
      this.prisma.seoGenerationJob.count({ where: { status: 'PENDING' } }),
      this.prisma.seoGenerationJob.count({ where: { status: 'COMPLETED' } })
    ]);
    
    const lowQualityCount = await this.prisma.seoQualityFailure.count();

    return {
      failures,
      stats: {
        lowQualityCount,
        queueCount: queue,
        regeneratedCount: regenerated
      }
    };
  }
}
