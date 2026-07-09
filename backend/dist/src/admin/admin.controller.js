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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../common/prisma.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
let AdminController = class AdminController {
    constructor(prisma) {
        this.prisma = prisma;
    }
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
    async getLeads() {
        return this.prisma.lead.findMany({
            orderBy: { createdAt: "desc" },
            include: {
                loanType: { select: { title: true } }
            }
        });
    }
    async getAnalytics() {
        const leads = await this.prisma.lead.findMany({
            include: {
                loanType: { select: { title: true } }
            }
        });
        const statusCounts = {};
        const productCounts = {};
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
    async updateLeadStatus(id, status) {
        return this.prisma.lead.update({
            where: { id },
            data: { status }
        });
    }
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
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Get)("dashboard"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "dashboard", null);
__decorate([
    (0, common_1.Get)("leads"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getLeads", null);
__decorate([
    (0, common_1.Get)("analytics"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getAnalytics", null);
__decorate([
    (0, common_1.Patch)("leads/:id/status"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)("status")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateLeadStatus", null);
__decorate([
    (0, common_1.Get)("seo-health"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getSeoHealth", null);
exports.AdminController = AdminController = __decorate([
    (0, common_1.Controller)("admin"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.SetMetadata)("roles", ["ADMIN"]),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map