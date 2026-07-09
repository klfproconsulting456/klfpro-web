-- AlterTable
ALTER TABLE "Lead" ADD COLUMN     "employmentType" TEXT,
ADD COLUMN     "existingEmi" DECIMAL(12,2),
ADD COLUMN     "monthlyIncome" DECIMAL(12,2);
