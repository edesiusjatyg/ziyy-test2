import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../../../../generated/prisma/client';
import { auth } from '../../../../auth';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { period } = await req.json();
    
    if (!period) {
      return NextResponse.json({ error: 'Period is required' }, { status: 400 });
    }

    // Check if report already exists
    const existingReport = await prisma.monthlyReport.findFirst({
      where: { period },
    });

    if (existingReport) {
      // Convert BigInt to number for JSON response
      const responseReport = {
        ...existingReport,
        foTotalIncome: Number(existingReport.foTotalIncome),
        canteenTotalIncome: Number(existingReport.canteenTotalIncome),
        accountingTotalIncome: Number(existingReport.accountingTotalIncome),
        foTotalExpenses: Number(existingReport.foTotalExpenses),
        canteenTotalExpenses: Number(existingReport.canteenTotalExpenses),
        accountingTotalExpenses: Number(existingReport.accountingTotalExpenses),
        netIncome: Number(existingReport.netIncome),
        cashBalance: Number(existingReport.cashBalance),
        memberChartData: existingReport.memberChartData,
        incGymChartData: existingReport.incGymChartData,
        incClassChartData: existingReport.incClassChartData
      };
      return NextResponse.json(responseReport, { status: 200 });
    }

    // Generate display name from period (e.g., "2025-07" -> "Juli 2025")
    const generateDisplayName = (period: string) => {
      const [year, month] = period.split('-');
      const monthNames = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
      ];
      return `${monthNames[parseInt(month) - 1]} ${year}`;
    };

    // Calculate actual data from database
    const [year, month] = period.split('-');
    
    // Bookkeeping period: 25th of previous month to 24th of current month
    const startDate = new Date(parseInt(year), parseInt(month) - 2, 25); // 25th of previous month
    const endDate = new Date(parseInt(year), parseInt(month) - 1, 24, 23, 59, 59); // 24th of current month

    // Get member statistics
    const totalMembers = await prisma.member.count();
    const activeMembers = await prisma.member.count({
      where: {
        expiryDate: { gte: endDate }
      }
    });
    const expiredMembers = totalMembers - activeMembers;

    // Get new members for this period
    const newMembers = await prisma.member.count({
      where: {
        joinDate: {
          gte: startDate,
          lte: endDate
        }
      }
    });

    // Get renewals (approximate - members who joined before period but have expiry after period start)
    const renewals = await prisma.member.count({
      where: {
        joinDate: {
          lt: startDate
        },
        expiryDate: {
          gte: startDate,
          lte: endDate
        }
      }
    });

    // Get incidentiles
    const incidentiles = await prisma.incidentile.count({
      where: {
        date: {
          gte: startDate,
          lte: endDate
        }
      }
    });

    const incidentilesGym = await prisma.incidentile.count({
      where: {
        date: {
          gte: startDate,
          lte: endDate
        },
        type: 'GYM'
      }
    });

    const incidentilesClass = await prisma.incidentile.count({
      where: {
        date: {
          gte: startDate,
          lte: endDate
        },
        type: 'KELAS'
      }
    });

    // Get financial data
    const foTransactions = await prisma.txFo.findMany({
      where: {
        date: {
          gte: startDate,
          lte: endDate
        }
      }
    });

    const canteenTransactions = await prisma.txCanteen.findMany({
      where: {
        date: {
          gte: startDate,
          lte: endDate
        }
      }
    });

    const accountingTransactions = await prisma.txAccounting.findMany({
      where: {
        date: {
          gte: startDate,
          lte: endDate
        }
      }
    });

    // Calculate totals
    const foTotalIncome = foTransactions
      .filter(t => t.type === 'PEMASUKAN')
      .reduce((sum: number, t) => sum + Number(t.paymentAmount), 0);
    
    const foTotalExpenses = foTransactions
      .filter(t => t.type === 'PENGELUARAN')
      .reduce((sum: number, t) => sum + Number(t.paymentAmount), 0);

    const canteenTotalIncome = canteenTransactions
      .filter(t => t.type === 'PEMASUKAN')
      .reduce((sum: number, t) => sum + Number(t.paymentAmount), 0);
    
    const canteenTotalExpenses = canteenTransactions
      .filter(t => t.type === 'PENGELUARAN')
      .reduce((sum: number, t) => sum + Number(t.paymentAmount), 0);

    const accountingTotalIncome = accountingTransactions
      .filter(t => t.type === 'PEMASUKAN')
      .reduce((sum: number, t) => sum + Number(t.paymentAmount), 0);
    
    const accountingTotalExpenses = accountingTransactions
      .filter(t => t.type === 'PENGELUARAN')
      .reduce((sum: number, t) => sum + Number(t.paymentAmount), 0);

    const totalIncome = foTotalIncome + canteenTotalIncome + accountingTotalIncome;
    const totalExpenses = foTotalExpenses + canteenTotalExpenses + accountingTotalExpenses;
    const netIncome = totalIncome - totalExpenses;

    // Get campaigns
    const finishedCampaigns = await prisma.campaign.count({
      where: {
        endDate: {
          gte: startDate,
          lte: endDate
        },
        status: 'completed'
      }
    });

    const finishedCampaignData = await prisma.campaign.findMany({
      where: {
        endDate: {
          gte: startDate,
          lte: endDate
        },
        status: 'completed'
      },
      select: {
        title: true,
        activities: {
          select: {
            title: true
          }
        }
      }
    });

    const finishedCampaignNames = finishedCampaignData.map(c => c.title);
    const finishedCampaignActivities = finishedCampaignData.flatMap(c => 
      c.activities.map(activity => activity.title)
    );

    // Generate chart data for the last 6 months (including current month)
    const generateChartData = () => {
      const chartData = [];
      const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];

      for (let i = 5; i >= 0; i--) {
        const targetMonth = new Date(parseInt(year), parseInt(month) - 1 - i, 1);
        const targetYear = targetMonth.getFullYear();
        const targetMonthIndex = targetMonth.getMonth();
        
        // Bookkeeping period: 25th of previous month to 24th of target month
        const chartStartDate = new Date(targetYear, targetMonthIndex - 1, 25);
        const chartEndDate = new Date(targetYear, targetMonthIndex, 24, 23, 59, 59);

        chartData.push({
          month: monthNames[targetMonthIndex],
          year: targetYear,
          startDate: chartStartDate,
          endDate: chartEndDate
        });
      }

      return chartData;
    };

    const chartMonths = generateChartData();

    // Generate member chart data (active members for each month)
    const memberChartData = await Promise.all(
      chartMonths.map(async (monthData) => {
        const activeMembersCount = await prisma.member.count({
          where: {
            expiryDate: { gte: monthData.endDate }
          }
        });

        return {
          month: monthData.month,
          activeMembers: activeMembersCount
        };
      })
    );

    // Generate gym incidentiles chart data
    const incGymChartData = await Promise.all(
      chartMonths.map(async (monthData) => {
        const gymIncidentilesCount = await prisma.incidentile.count({
          where: {
            date: {
              gte: monthData.startDate,
              lte: monthData.endDate
            },
            type: 'GYM'
          }
        });

        return {
          month: monthData.month,
          incidentiles: gymIncidentilesCount
        };
      })
    );

    // Generate class incidentiles chart data
    const incClassChartData = await Promise.all(
      chartMonths.map(async (monthData) => {
        const classIncidentilesCount = await prisma.incidentile.count({
          where: {
            date: {
              gte: monthData.startDate,
              lte: monthData.endDate
            },
            type: 'KELAS'
          }
        });

        return {
          month: monthData.month,
          incidentiles: classIncidentilesCount
        };
      })
    );

    // Process canteen items sold (simplified - you may want to enhance this)
    const canteenItemsSold = canteenTransactions
      .filter(t => t.type === 'PEMASUKAN')
      .reduce((items: any[], transaction) => {
        // Extract item info from transaction title or create generic entry
        const itemName = transaction.title || 'Makanan/Minuman';
        const existingItem = items.find(item => item.name === itemName);
        
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          items.push({
            name: itemName,
            quantity: 1,
            price: Number(transaction.paymentAmount)
          });
        }
        
        return items;
      }, []);

    // Calculate approximate cash balance (you may want to enhance this)
    const cashBalance = netIncome;

    // Create the report
    const reportData = {
      period,
      displayName: generateDisplayName(period),
      totalMembers,
      activeMembers,
      expiredMembers,
      newMembers,
      renewals,
      incidentiles,
      incidentilesGym,
      incidentilesClass,
      canteenItemsSold,
      finishedCampaigns,
      finishedCampaignNames,
      finishedCampaignActivities,
      foTotalIncome: BigInt(foTotalIncome),
      canteenTotalIncome: BigInt(canteenTotalIncome),
      accountingTotalIncome: BigInt(accountingTotalIncome),
      foTotalExpenses: BigInt(foTotalExpenses),
      canteenTotalExpenses: BigInt(canteenTotalExpenses),
      accountingTotalExpenses: BigInt(accountingTotalExpenses),
      netIncome: BigInt(netIncome),
      cashBalance: BigInt(cashBalance),
      memberChartData: memberChartData,
      incGymChartData: incGymChartData,
      incClassChartData: incClassChartData,
      status: 'IN_PROGRESS' as const
    };

    console.log('Creating report with data:', {
      period: reportData.period,
      displayName: reportData.displayName,
      chartDataLengths: {
        memberChartData: memberChartData.length,
        incGymChartData: incGymChartData.length,
        incClassChartData: incClassChartData.length
      }
    });

    const newReport = await prisma.monthlyReport.create({
      data: reportData
    });

    // Convert BigInt to number for JSON response
    const responseReport = {
      ...newReport,
      foTotalIncome: Number(newReport.foTotalIncome),
      canteenTotalIncome: Number(newReport.canteenTotalIncome),
      accountingTotalIncome: Number(newReport.accountingTotalIncome),
      foTotalExpenses: Number(newReport.foTotalExpenses),
      canteenTotalExpenses: Number(newReport.canteenTotalExpenses),
      accountingTotalExpenses: Number(newReport.accountingTotalExpenses),
      netIncome: Number(newReport.netIncome),
      cashBalance: Number(newReport.cashBalance)
    };

    return NextResponse.json(responseReport, { status: 201 });
  } catch (error) {
    console.error('Error generating report:', error);
    
    // More detailed error logging
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    return NextResponse.json({ 
      error: 'Failed to generate report',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
