import { Module } from "@nestjs/common";
import { LeadsController } from "./leads.controller";
import { LeadsService } from "./leads.service";
import { BullModule } from "@nestjs/bullmq";
import { LeadsProcessor } from "./leads.processor";
import { PrismaModule } from "../database/prisma.module";

@Module({
  imports: [
    PrismaModule,
    BullModule.registerQueue({
      name: "leads",
    }),
  ],
  controllers: [LeadsController],
  providers: [LeadsService, LeadsProcessor]
})
export class LeadsModule {}
