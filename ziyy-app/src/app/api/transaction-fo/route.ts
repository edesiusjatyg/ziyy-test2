// API route for transactions resource
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const txs = await prisma.txFo.findMany();
    return NextResponse.json(txs, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch fo transactions' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const tx = await prisma.txFo.create({ data });
    return NextResponse.json(tx, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create fo transaction' }, { status: 400 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, ...data } = await req.json();
    const tx = await prisma.txFo.update({ where: { id }, data });
    return NextResponse.json(tx, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update fo transaction' }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    await prisma.txFo.delete({ where: { id } });
    return NextResponse.json({ message: 'FO transaction deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete fo transaction' }, { status: 400 });
  }
}
