-- AlterTable
ALTER TABLE "OtpStore" ADD COLUMN     "lockedUntil" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "SeoPage" ADD COLUMN     "qualityScore" INTEGER NOT NULL DEFAULT 100;

-- CreateTable
CREATE TABLE "SecurityLog" (
    "id" TEXT NOT NULL,
    "phone" TEXT,
    "eventType" TEXT NOT NULL,
    "ipAddress" TEXT,
    "deviceInfo" TEXT,
    "userAgent" TEXT,
    "riskScore" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SecurityLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeoQualityFailure" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "reasons" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SeoQualityFailure_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeoGenerationJob" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SeoGenerationJob_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "SecurityLog_phone_idx" ON "SecurityLog"("phone");

-- CreateIndex
CREATE INDEX "SecurityLog_createdAt_idx" ON "SecurityLog"("createdAt" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "SeoQualityFailure_slug_key" ON "SeoQualityFailure"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "SeoGenerationJob_slug_key" ON "SeoGenerationJob"("slug");

-- CreateIndex
CREATE INDEX "SeoGenerationJob_status_idx" ON "SeoGenerationJob"("status");

-- CreateIndex
CREATE INDEX "SeoPage_slug_idx" ON "SeoPage"("slug");
