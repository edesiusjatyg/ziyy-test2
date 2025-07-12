import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma/client';
import { ApiCache } from '../../../lib/cache';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get('id'));
  if (!id) return NextResponse.json({ error: 'No member id provided' }, { status: 400 });
  try {
    // Try to get from cache first
    let couple = await ApiCache.getCouple(id);
    
    if (!couple) {
      console.log('🔥 COUPLE CACHE MISS - Fetching from database');
      couple = await prisma.couple.findFirst({
        where: {
          OR: [
            { member1Id: id },
            { member2Id: id }
          ]
        },
        include: {
          member1: true,
          member2: true
        }
      });
      await ApiCache.setCouple(id, couple);
      console.log('💾 Couple cached for next request');
    } else {
      console.log('⚡ COUPLE CACHE HIT - Returning cached data');
    }
    
    if (!couple) return NextResponse.json({ coupleName: null }, { status: 200 });
    // Return the other member's name
    let coupleName = null;
    if (couple.member1Id === id) coupleName = couple.member2.name;
    else if (couple.member2Id === id) coupleName = couple.member1.name;
    return NextResponse.json({ coupleName }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch couple info' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    const couple = await prisma.couple.findFirst({
      where: {
        OR: [
          { member1Id: id },
          { member2Id: id }
        ]
      }
    });

    if (!couple) {
      return NextResponse.json({ message: 'No couple linkage found' }, { status: 404 });
    }

    await prisma.couple.delete({ where: { id: couple.id } });
    
    // Invalidate couple cache for both members
    await ApiCache.invalidateCouple(couple.member1Id);
    await ApiCache.invalidateCouple(couple.member2Id);
    console.log('🗑️ Couple cache invalidated after deletion');
    
    return NextResponse.json({ message: 'Couple linkage deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete couple linkage' }, { status: 400 });
  }
}
