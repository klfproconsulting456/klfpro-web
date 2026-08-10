import { PrismaService } from "../common/prisma.service";
export declare class DocumentsService {
    private prisma;
    constructor(prisma: PrismaService);
    uploadDocument(leadId: string, name: string, type: string, fileUrl: string): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        status: string;
        leadId: string;
        updatedAt: Date;
        type: string;
        fileUrl: string;
        note: string | null;
    }>;
    getDocumentsForUser(phone: string): Promise<{
        leadId: any;
        loanType: any;
        status: any;
        documents: any;
    }[]>;
}
