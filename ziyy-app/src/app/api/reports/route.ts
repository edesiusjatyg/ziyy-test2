import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma/client';
import { auth } from '../../../auth';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    let reports;
    const { searchParams } = new URL(req.url);
    const period = searchParams.get('period');
    if (!period) {
      reports = await prisma.monthlyReport.findMany({
        orderBy: { id: 'desc' },
      });
      return NextResponse.json(reports, { status: 200 });
    } else {
      reports = await prisma.monthlyReport.findMany({
        where: { period },
      });
      return NextResponse.json(reports, { status: 200 });
    }
  } catch (error) {
    console.error('Error fetching report:', error);
    return NextResponse.json({ error: 'Failed to fetch report' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await req.json();
    const report = await prisma.monthlyReport.create({ data });

    return NextResponse.json(report, { status: 201 });
  } catch (error) {
    console.error('Error creating report:', error);
    return NextResponse.json({ error: 'Failed to create report' }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const { id } = await req.json();
    const report = await prisma.monthlyReport.delete({ where: { id } });
    return NextResponse.json(report, { status: 200 });
  } catch (error) {
    console.error('Error deleting report:', error);
    return NextResponse.json({ error: 'Failed to delete report' }, { status: 500 });
  }
}