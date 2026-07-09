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
        status: string;
        id: string;
        fullName: string;
        phone: string;
        email: string;
        loanTypeId: string;
        assignedToId: string | null;
        message: string | null;
        loanAmount: import("@prisma/client/runtime/library").Decimal | null;
        monthlyIncome: import("@prisma/client/runtime/library").Decimal | null;
        employmentType: string | null;
        existingEmi: import("@prisma/client/runtime/library").Decimal | null;
        createdAt: Date;
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
        status: string;
        id: string;
        fullName: string;
        phone: string;
        email: string;
        loanTypeId: string;
        assignedToId: string | null;
        message: string | null;
        loanAmount: import("@prisma/client/runtime/library").Decimal | null;
        monthlyIncome: import("@prisma/client/runtime/library").Decimal | null;
        employmentType: string | null;
        existingEmi: import("@prisma/client/runtime/library").Decimal | null;
        createdAt: Date;
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
