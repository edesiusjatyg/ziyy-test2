import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const expiringSoon = searchParams.get('expiringSoon');
  try {
    let members;
    if (expiringSoon === 'true') {
      const now = new Date();
      const in7Days = new Date();
      in7Days.setDate(now.getDate() + 7);
      members = await prisma.member.findMany({
        where: {
          expiryDate: {
            gte: now,
            lte: in7Days,
          },
        },
      });
    } else {
      members = await prisma.member.findMany();
    }
    return NextResponse.json(members, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch members' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { member, couple } = await req.json();
    let createdMember, createdCouple;

    createdMember = await prisma.member.create({ data: member });
    if (couple) {
      createdCouple = await prisma.member.create({ data: couple });
      await prisma.couple.create({
        data: {
          member1Id: createdMember.id,
          member2Id: createdCouple.id,
        },
      });
    }

    return NextResponse.json({ member: createdMember, couple: createdCouple }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create member/couple' }, { status: 400 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, ...data } = await req.json();
    const before = await prisma.member.findUnique({ where: { id: Number(id) } });
    console.log("Before update:", before);
    console.log("Updating with:", data);
    const member = await prisma.member.update({ where: { id: Number(id) }, data });
    const after = await prisma.member.findUnique({ where: { id: Number(id) } });
    console.log("After update:", after);
    return NextResponse.json(member, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to update member' }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    await prisma.member.delete({ where: { id } });
    return NextResponse.json({ message: 'Member deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete member' }, { status: 400 });
  }
}
