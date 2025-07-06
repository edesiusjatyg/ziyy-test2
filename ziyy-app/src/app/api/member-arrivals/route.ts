// API route for member arrivals resource
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const arrivals = await prisma.memberArrival.findMany({ include: { member: true } });
    return NextResponse.json(arrivals, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch member arrivals' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const arrival = await prisma.memberArrival.create({ data });
    return NextResponse.json(arrival, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create member arrival' }, { status: 400 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, ...data } = await req.json();
    const arrival = await prisma.memberArrival.update({ where: { id }, data });
    return NextResponse.json(arrival, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update member arrival' }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    await prisma.memberArrival.delete({ where: { id } });
    return NextResponse.json({ message: 'Member arrival deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete member arrival' }, { status: 400 });
  }
}
