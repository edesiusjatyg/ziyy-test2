import { NextResponse } from 'next/server';
import { PrismaClient, MemberStatus } from '../../../../generated/prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    console.log('Cron job started at:', new Date().toISOString());
    
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    console.log('Checking for expired members before:', today);
    console.log('Checking for active members after:', now);

    const expiredUpdate = await prisma.member.updateMany({
      where: {
        expiryDate: { lt: today },
        status: { not: MemberStatus.EXPIRED }
      },
      data: { status: MemberStatus.EXPIRED }
    });

    const activeUpdate = await prisma.member.updateMany({
      where: {
        expiryDate: { gte: today },
        status: { not: MemberStatus.ACTIVE }
      },
      data: { status: MemberStatus.ACTIVE }
    });

    const result = {
      message: 'Member statuses updated successfully.',
      updatedToExpired: expiredUpdate.count,
      updatedToActive: activeUpdate.count,
      timestamp: new Date().toISOString()
    };

    console.log('Cron job result:', result);
    return NextResponse.json(result, { status: 200 });

  } catch (error) {
    console.error('Error updating member statuses:', error);
    return NextResponse.json({ 
      error: 'Failed to update member statuses',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}