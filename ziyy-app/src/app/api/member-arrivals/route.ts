// src/app/api/member-arrivals/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient, ArrivalType } from '../../../generated/prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const arrivals = await prisma.memberArrival.findMany({ 
        include: { member: true },
        orderBy: { arrivalDate: 'desc' } 
    });
    return NextResponse.json(arrivals, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch member arrivals' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { memberId, arrivalType } = await req.json();

    if (!memberId || !arrivalType) {
      return NextResponse.json({ error: 'Member ID and arrival type are required' }, { status: 400 });
    }

    const member = await prisma.member.findUnique({
      where: { id: memberId },
    });

    if (!member) {
      return NextResponse.json({ error: `Member with ID ${memberId} not found.` }, { status: 404 });
    }
    
    if (arrivalType === 'GYM_PT' && (!member.ptAmount || member.ptAmount <= 0)) {
        return NextResponse.json({ error: `${member.name} has no PT sessions remaining.` }, { status: 400 });
    }

    const [newArrival] = await prisma.$transaction([
        prisma.memberArrival.create({
            data: {
                memberId: member.id,
                arrivalDate: new Date(),
                arrivalType: arrivalType as ArrivalType,
            },
            include: { member: true }
        }),
        ...(arrivalType === 'GYM_PT' ? [
            prisma.member.update({
                where: { id: member.id },
                data: { ptAmount: { decrement: 1 } },
            })
        ] : [])
    ]);

    return NextResponse.json(newArrival, { status: 201 });

  } catch (error) {
    console.error('Failed to create member arrival:', error);
    return NextResponse.json({ error: 'An internal error occurred.' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    await prisma.memberArrival.delete({ where: { id: Number(id) } });
    return NextResponse.json({ message: 'Member arrival deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete member arrival' }, { status: 400 });
  }
}