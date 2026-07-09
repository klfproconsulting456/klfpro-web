import { CreateLeadDto } from "./dto/create-lead.dto";
import { LeadsService } from "./leads.service";
export declare class LeadsController {
    private readonly leads;
    constructor(leads: LeadsService);
    list(take?: string): Promise<({
        loanType: {
            slug: string;
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
        assignedToId: string | null;
        status: string;
        loanTypeId: string;
    })[]>;
    create(dto: CreateLeadDto): Promise<{
        success: boolean;
        message: string;
    }>;
    getMyLeads(req: any): Promise<({
        loanType: {
            id: string;
            createdAt: Date;
            slug: string;
            title: string;
            description: string | null;
        };
        timeline: {
            leadId: string;
            id: string;
            createdAt: Date;
            description: string | null;
            stage: string;
        }[];
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
        assignedToId: string | null;
        status: string;
        loanTypeId: string;
    })[]>;
    getAllSeoPages(): Promise<{
        slug: string;
        updatedAt: Date;
    }[]>;
    getSeoPage(slug: string): Promise<{
        status: string;
        id: string;
        createdAt: Date;
        slug: string;
        title: string;
        city: string;
        service: string;
        metaDescription: string;
        h1: string;
        content: string;
        faqs: import("@prisma/client/runtime/library").JsonValue | null;
        interestRate: import("@prisma/client/runtime/library").Decimal | null;
        qualityScore: number;
        isActive: boolean;
        updatedAt: Date;
    } | {
        id: string;
        slug: string;
        city: string;
        service: string;
        title: string;
        metaDescription: string;
        h1: string;
        content: string;
        interestRate: number;
        faqs: {
            question: string;
            answer: string;
        }[];
        qualityScore: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        status: string;
    }>;
}
