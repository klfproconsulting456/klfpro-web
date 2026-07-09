"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../common/prisma.service");
const bullmq_1 = require("@nestjs/bullmq");
const bullmq_2 = require("bullmq");
let LeadsService = class LeadsService {
    constructor(prisma, leadsQueue) {
        this.prisma = prisma;
        this.leadsQueue = leadsQueue;
    }
    async create(dto) {
        const slug = dto.loanTypeSlug.trim().toLowerCase();
        const loanType = await this.prisma.loanType.findUnique({ where: { slug } });
        if (!loanType) {
            throw new common_1.BadRequestException(`Unknown loan type: ${dto.loanTypeSlug}`);
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
            const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error("Redis Queue Timeout")), 1500));
            await Promise.race([addJob, timeoutPromise]);
        }
        catch (error) {
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
    async findByPhone(phone) {
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
    async getSeoPage(slug) {
        let page = await this.prisma.seoPage.findUnique({ where: { slug } });
        if (page && page.qualityScore >= 85) {
            return { ...page, status: "SERVE_CACHE" };
        }
        const parts = slug.split("-");
        const city = parts[parts.length - 1];
        const service = parts.slice(0, -1).join(" ");
        if (parts.length < 2 || city?.length < 3) {
            return null;
        }
        const jobExists = await this.prisma.seoGenerationJob.findUnique({ where: { slug } });
        if (!jobExists) {
            await this.prisma.seoGenerationJob.create({
                data: { slug, city, service }
            });
        }
        if (page && page.qualityScore < 85) {
            await this.prisma.seoQualityFailure.upsert({
                where: { slug },
                update: { score: page.qualityScore, reasons: ["Automatic periodic regeneration"] },
                create: { slug, score: page.qualityScore, reasons: ["Initial quality failure"] }
            });
        }
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
};
exports.LeadsService = LeadsService;
exports.LeadsService = LeadsService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, bullmq_1.InjectQueue)("leads")),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        bullmq_2.Queue])
], LeadsService);
//# sourceMappingURL=leads.service.js.map