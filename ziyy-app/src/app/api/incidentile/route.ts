// API route for incidentile resource
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const incidentiles = await prisma.incidentile.findMany();
    return NextResponse.json(incidentiles, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch incidentiles' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const incidentile = await prisma.incidentile.create({ data });
    return NextResponse.json(incidentile, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create incidentile' }, { status: 400 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, ...data } = await req.json();
    const incidentile = await prisma.incidentile.update({ where: { id }, data });
    return NextResponse.json(incidentile, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update incidentile' }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    await prisma.incidentile.delete({ where: { id } });
    return NextResponse.json({ message: 'Incidentile deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete incidentile' }, { status: 400 });
  }
}
