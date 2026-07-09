import { Processor, WorkerHost } from "@nestjs/bullmq";
import { Job } from "bullmq";
import { PrismaService } from "../common/prisma.service";
import { Logger } from "@nestjs/common";

@Processor("leads")
export class LeadsProcessor extends WorkerHost {
  private readonly logger = new Logger(LeadsProcessor.name);

  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async process(job: Job<any, any, string>): Promise<any> {
    if (job.name === "create-lead") {
      try {
        const data = job.data;
        const lead = await this.prisma.lead.create({
          data: {
            fullName: data.fullName,
            phone: data.phone,
            email: data.email,
            loanTypeId: data.loanTypeId,
            message: data.message,
            loanAmount: data.loanAmount,
            monthlyIncome: data.monthlyIncome,
            employmentType: data.employmentType,
            existingEmi: data.existingEmi,
          },
        });
        this.logger.log(`Successfully created lead ${lead.id} from queue`);
        
        // Mocking an SMS/WhatsApp Notification Service (Option 3 implementation)
        this.logger.log(`[NOTIFICATION SERVICE] Sending Welcome WhatsApp/SMS to +91${data.phone}`);
        this.logger.log(`[NOTIFICATION SERVICE] Message: "Hi ${data.fullName}, your application is received! Our loan experts will contact you shortly."`);
        
        return lead;
      } catch (error: any) {
        this.logger.error(`Failed to process lead job ${job.id}: ${error.message}`);
        throw error;
      }
    }
  }
}
