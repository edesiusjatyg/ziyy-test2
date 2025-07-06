// API route for transactions resource
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const txs = await prisma.txFo.findMany();
    return NextResponse.json(txs, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch accounting transactions' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const tx = await prisma.txFo.create({ data });
    return NextResponse.json(tx, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create accounting transaction' }, { status: 400 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, ...data } = await req.json();
    const tx = await prisma.txFo.update({ where: { id }, data });
    return NextResponse.json(tx, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update accounting transaction' }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    await prisma.txFo.delete({ where: { id } });
    return NextResponse.json({ message: 'Accounting transaction deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete accounting transaction' }, { status: 400 });
  }
}
