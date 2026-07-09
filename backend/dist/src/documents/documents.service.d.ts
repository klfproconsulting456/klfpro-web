import { PrismaService } from "../common/prisma.service";
export declare class DocumentsService {
    private prisma;
    constructor(prisma: PrismaService);
    uploadDocument(leadId: string, name: string, type: string, fileUrl: string): Promise<{
        id: string;
        name: string;
        type: string;
        fileUrl: string;
        status: string;
        note: string | null;
        createdAt: Date;
        updatedAt: Date;
        leadId: string;
    }>;
    getDocumentsForUser(phone: string): Promise<{
        leadId: any;
        loanType: any;
        status: any;
        documents: any;
    }[]>;
}
