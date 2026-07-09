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
var LeadsProcessor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadsProcessor = void 0;
const bullmq_1 = require("@nestjs/bullmq");
const prisma_service_1 = require("../common/prisma.service");
const common_1 = require("@nestjs/common");
let LeadsProcessor = LeadsProcessor_1 = class LeadsProcessor extends bullmq_1.WorkerHost {
    constructor(prisma) {
        super();
        this.prisma = prisma;
        this.logger = new common_1.Logger(LeadsProcessor_1.name);
    }
    async process(job) {
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
                this.logger.log(`[NOTIFICATION SERVICE] Sending Welcome WhatsApp/SMS to +91${data.phone}`);
                this.logger.log(`[NOTIFICATION SERVICE] Message: "Hi ${data.fullName}, your application is received! Our loan experts will contact you shortly."`);
                return lead;
            }
            catch (error) {
                this.logger.error(`Failed to process lead job ${job.id}: ${error.message}`);
                throw error;
            }
        }
    }
};
exports.LeadsProcessor = LeadsProcessor;
exports.LeadsProcessor = LeadsProcessor = LeadsProcessor_1 = __decorate([
    (0, bullmq_1.Processor)("leads"),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LeadsProcessor);
//# sourceMappingURL=leads.processor.js.map