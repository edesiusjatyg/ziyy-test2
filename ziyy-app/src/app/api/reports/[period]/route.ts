import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../../../../generated/prisma/client';
import { auth } from '../../../../auth';

const prisma = new PrismaClient();

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ period: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { period } = await params;
    
    const report = await prisma.monthlyReport.findFirst({
      where: { period },
    });

    if (!report) {
      return NextResponse.json({ error: 'Report not found' }, { status: 404 });
    }

    const responseReport = {
      ...report,
      foTotalIncome: Number(report.foTotalIncome),
      canteenTotalIncome: Number(report.canteenTotalIncome),
      accountingTotalIncome: Number(report.accountingTotalIncome),
      foTotalExpenses: Number(report.foTotalExpenses),
      canteenTotalExpenses: Number(report.canteenTotalExpenses),
      accountingTotalExpenses: Number(report.accountingTotalExpenses),
      netIncome: Number(report.netIncome),
      cashBalance: Number(report.cashBalance),
      memberChartData: report.memberChartData,
      incGymChartData: report.incGymChartData,
      incClassChartData: report.incClassChartData
    };

    return NextResponse.json(responseReport, { status: 200 });
  } catch (error) {
    console.error('Error fetching report:', error);
    return NextResponse.json({ error: 'Failed to fetch report' }, { status: 500 });
  }
}
