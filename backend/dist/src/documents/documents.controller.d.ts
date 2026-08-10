import { DocumentsService } from "./documents.service";
export declare class DocumentsController {
    private readonly documentsService;
    constructor(documentsService: DocumentsService);
    getMyDocuments(req: any): Promise<{
        leadId: any;
        loanType: any;
        status: any;
        documents: any;
    }[]>;
    uploadDocument(req: any, file: Express.Multer.File, body: {
        leadId: string;
        name: string;
        type: string;
    }): Promise<{
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
}
