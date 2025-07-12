// src/app/api/member-arrivals/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient, ArrivalType } from '../../../generated/prisma/client';
import { ApiCache } from '../../../lib/cache';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const from = searchParams.get('from');
    const to = searchParams.get('to');
    
    let arrivals;
    
    if (from && to) {
      // Date-specific query - cache by date
      const dateKey = `${from}_${to}`;
      arrivals = await ApiCache.getArrivals(dateKey);
      
      if (!arrivals) {
        console.log('🔥 ARRIVALS CACHE MISS - Fetching from database');
        arrivals = await prisma.memberArrival.findMany({ 
          where: {
            arrivalDate: {
              gte: new Date(from),
              lt: new Date(to)
            }
          },
          include: { member: true },
          orderBy: { arrivalDate: 'desc' } 
        });
        await ApiCache.setArrivals(arrivals, dateKey);
        console.log('💾 Arrivals cached for next request');
      } else {
        console.log('⚡ ARRIVALS CACHE HIT - Returning cached data');
      }
    } else {
      // All arrivals query
      arrivals = await ApiCache.getArrivals();
      
      if (!arrivals) {
        console.log('🔥 ALL ARRIVALS CACHE MISS - Fetching from database');
        arrivals = await prisma.memberArrival.findMany({ 
          include: { member: true },
          orderBy: { arrivalDate: 'desc' } 
        });
        await ApiCache.setArrivals(arrivals);
        console.log('💾 All arrivals cached for next request');
      } else {
        console.log('⚡ ALL ARRIVALS CACHE HIT - Returning cached data');
      }
    }
    
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

    // Invalidate all arrivals cache after creating new arrival
    await ApiCache.invalidateArrivals();
    console.log('🗑️ Arrivals cache invalidated after new arrival');

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
    
    // Invalidate all arrivals cache after deleting arrival
    await ApiCache.invalidateArrivals();
    console.log('🗑️ Arrivals cache invalidated after deletion');
    
    return NextResponse.json({ message: 'Member arrival deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete member arrival' }, { status: 400 });
  }
}