import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get('id'));
  if (!id) return NextResponse.json({ error: 'No member id provided' }, { status: 400 });
  try {
    const couple = await prisma.couple.findFirst({
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
    return NextResponse.json({ message: 'Couple linkage deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete couple linkage' }, { status: 400 });
  }
}
