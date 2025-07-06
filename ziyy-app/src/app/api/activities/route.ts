  // API route for activities resource
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const activities = await prisma.activityMarketing.findMany({ include: { campaign: true } });
    return NextResponse.json(activities, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch activities' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const activity = await prisma.activityMarketing.create({ data });
    return NextResponse.json(activity, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create activity' }, { status: 400 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, ...data } = await req.json();
    const activity = await prisma.activityMarketing.update({ where: { id }, data });
    return NextResponse.json(activity, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update activity' }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    await prisma.activityMarketing.delete({ where: { id } });
    return NextResponse.json({ message: 'Activity deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete activity' }, { status: 400 });
  }
}
