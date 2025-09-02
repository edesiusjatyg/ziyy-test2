-- AlterTable
ALTER TABLE "MonthlyReport" ADD COLUMN     "incClassChartData" JSONB NOT NULL DEFAULT '{}',
ADD COLUMN     "incGymChartData" JSONB NOT NULL DEFAULT '{}',
ADD COLUMN     "memberChartData" JSONB NOT NULL DEFAULT '{}';
