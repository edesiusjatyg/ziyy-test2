-- CreateEnum
CREATE TYPE "ReportStatus" AS ENUM ('IN_PROGRESS', 'COMPLETED');

-- CreateTable
CREATE TABLE "MonthlyReport" (
    "id" SERIAL NOT NULL,
    "period" TEXT NOT NULL,
    "displayName" TEXT NOT NULL DEFAULT '',
    "totalMembers" INTEGER NOT NULL DEFAULT 0,
    "activeMembers" INTEGER NOT NULL DEFAULT 0,
    "expiredMembers" INTEGER NOT NULL DEFAULT 0,
    "newMembers" INTEGER NOT NULL DEFAULT 0,
    "renewals" INTEGER NOT NULL DEFAULT 0,
    "incidentiles" INTEGER NOT NULL DEFAULT 0,
    "incidentilesGym" INTEGER NOT NULL DEFAULT 0,
    "incidentilesClass" INTEGER NOT NULL DEFAULT 0,
    "canteenItemsSold" JSONB NOT NULL DEFAULT '{}',
    "finishedCampaigns" INTEGER NOT NULL DEFAULT 0,
    "finishedCampaignNames" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "finishedCampaignActivities" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "foTotalIncome" BIGINT NOT NULL DEFAULT 0,
    "canteenTotalIncome" BIGINT NOT NULL DEFAULT 0,
    "accountingTotalIncome" BIGINT NOT NULL DEFAULT 0,
    "foTotalExpenses" BIGINT NOT NULL DEFAULT 0,
    "canteenTotalExpenses" BIGINT NOT NULL DEFAULT 0,
    "accountingTotalExpenses" BIGINT NOT NULL DEFAULT 0,
    "netIncome" BIGINT NOT NULL DEFAULT 0,
    "cashBalance" BIGINT NOT NULL DEFAULT 0,
    "status" "ReportStatus" NOT NULL,
    "generatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MonthlyReport_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MonthlyReport_period_key" ON "MonthlyReport"("period");

-- CreateIndex
CREATE INDEX "MonthlyReport_period_idx" ON "MonthlyReport"("period");

-- CreateIndex
CREATE INDEX "MonthlyReport_status_idx" ON "MonthlyReport"("status");
