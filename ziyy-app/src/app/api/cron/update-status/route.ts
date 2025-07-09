// src/app/api/cron/update-status/route.ts

import { NextResponse } from 'next/server';
import { PrismaClient, MemberStatus } from '../../../../generated/prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const expiredUpdate = await prisma.member.updateMany({
      where: {expiryDate: {lt: today}, status: {not: MemberStatus.EXPIRED}},
      data: {status: MemberStatus.EXPIRED}
    });

    const activeUpdate = await prisma.member.updateMany({
        where: {expiryDate: {gt: now}, status: {not: MemberStatus.ACTIVE}},
        data: {status: MemberStatus.ACTIVE}
    });

    const result = {
      message: 'Member statuses updated successfully.',
      updatedToExpired: expiredUpdate.count,
      updatedToActive: activeUpdate.count,
    };

    return NextResponse.json(result, { status: 200 });

  } catch (error) {
    console.error('Error updating member statuses:', error);
    return NextResponse.json({ error: 'Failed to update member statuses' }, { status: 500 });
  }
}