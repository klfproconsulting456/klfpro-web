import { Injectable } from "@nestjs/common";
import Redis from "ioredis";

@Injectable()
export class RedisService {
  private readonly client = new Redis(process.env.REDIS_URL || "redis://localhost:6379", {
    lazyConnect: true,
    maxRetriesPerRequest: 1
  });

  constructor() {
    this.client.on("error", () => {
      // Keep API running in local dev even when Redis is unavailable.
    });
    void this.client.connect().catch(() => undefined);
  }

  get redis() {
    return this.client;
  }
}
