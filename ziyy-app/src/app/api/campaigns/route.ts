// API route for campaigns resource
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const campaigns = await prisma.campaign.findMany({ include: { activities: true } });
    return NextResponse.json(campaigns, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch campaigns' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const campaign = await prisma.campaign.create({ data });
    return NextResponse.json(campaign, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create campaign' }, { status: 400 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, ...data } = await req.json();
    const campaign = await prisma.campaign.update({ where: { id }, data });
    return NextResponse.json(campaign, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update campaign' }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    await prisma.campaign.delete({ where: { id } });
    return NextResponse.json({ message: 'Campaign deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete campaign' }, { status: 400 });
  }
}
