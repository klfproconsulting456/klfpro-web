import { PrismaService } from "../common/prisma.service";
export declare class AdminController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    dashboard(): Promise<{
        totalLeads: number;
        applicationsInProgress: number;
        approved: number;
    }>;
    getLeads(): Promise<({
        loanType: {
            title: string;
        };
    } & {
        id: string;
        email: string;
        fullName: string;
        createdAt: Date;
        phone: string;
        message: string | null;
        monthlyIncome: import("@prisma/client/runtime/library").Decimal | null;
        employmentType: string | null;
        existingEmi: import("@prisma/client/runtime/library").Decimal | null;
        loanAmount: import("@prisma/client/runtime/library").Decimal | null;
        loanTypeId: string;
        assignedToId: string | null;
        status: string;
    })[]>;
    getAnalytics(): Promise<{
        byStatus: {
            name: string;
            value: number;
        }[];
        byProduct: {
            name: string;
            value: number;
        }[];
    }>;
    updateLeadStatus(id: string, status: string): Promise<{
        id: string;
        email: string;
        fullName: string;
        createdAt: Date;
        phone: string;
        message: string | null;
        monthlyIncome: import("@prisma/client/runtime/library").Decimal | null;
        employmentType: string | null;
        existingEmi: import("@prisma/client/runtime/library").Decimal | null;
        loanAmount: import("@prisma/client/runtime/library").Decimal | null;
        loanTypeId: string;
        assignedToId: string | null;
        status: string;
    }>;
    getSeoHealth(): Promise<{
        failures: {
            id: string;
            createdAt: Date;
            slug: string;
            score: number;
            reasons: import("@prisma/client/runtime/library").JsonValue;
        }[];
        stats: {
            lowQualityCount: number;
            queueCount: number;
            regeneratedCount: number;
        };
    }>;
}
