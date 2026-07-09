import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../common/prisma.service";

@Injectable()
export class DocumentsService {
  constructor(private prisma: PrismaService) {}

  async uploadDocument(leadId: string, name: string, type: string, fileUrl: string) {
    const lead = await this.prisma.lead.findUnique({ where: { id: leadId } });
    if (!lead) {
      throw new NotFoundException("Lead not found");
    }

    return this.prisma.document.create({
      data: {
        leadId,
        name,
        type,
        fileUrl,
      },
    });
  }

  async getDocumentsForUser(phone: string) {
    // Find leads for this phone and include their documents
    const leads = await this.prisma.lead.findMany({
      where: { phone },
      include: {
        documents: true,
      },
      orderBy: { createdAt: "desc" },
    });

    // Flatten to a list of documents or return grouped by lead
    // Let's group by lead for a better frontend experience
    return leads.map((l: any) => ({
      leadId: l.id,
      loanType: l.loanTypeId,
      status: l.status,
      documents: l.documents,
    }));
  }
}

