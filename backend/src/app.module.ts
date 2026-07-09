import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { BullModule } from "@nestjs/bullmq";
import { AuthModule } from "./auth/auth.module";
import { LeadsModule } from "./leads/leads.module";
import { ApplicationsModule } from "./applications/applications.module";
import { CalculationsModule } from "./calculations/calculations.module";
import { AdminModule } from "./admin/admin.module";
import { DocumentsModule } from "./documents/documents.module";
import { PrismaModule } from "./database/prisma.module";
import { RedisService } from "./common/redis.service";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const redisUrl = configService.get<string>("REDIS_URL") || "redis://localhost:6379";
        const url = new URL(redisUrl);
        return {
          connection: {
            host: url.hostname,
            port: parseInt(url.port || "6379", 10),
            enableOfflineQueue: false,
            commandTimeout: 2000,
            connectTimeout: 2000,
          },
        };
      },
      inject: [ConfigService],
    }),
    PrismaModule,
    AuthModule,
    LeadsModule,
    ApplicationsModule,
    CalculationsModule,
    AdminModule,
    DocumentsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "uploads"),
      serveRoot: "/uploads",
    })
  ],
  providers: [RedisService]
})
export class AppModule {}
