// API route for transactions resource
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const transactions = await prisma.txCanteen.findMany();
    return NextResponse.json(transactions, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch canteen transactions' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const transaction = await prisma.txCanteen.create({ data });
    return NextResponse.json(transaction, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create canteen transaction' }, { status: 400 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, ...data } = await req.json();
    const transaction = await prisma.txCanteen.update({ where: { id }, data });
    return NextResponse.json(transaction, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update canteen transaction' }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    await prisma.txCanteen.delete({ where: { id } });
    return NextResponse.json({ message: 'Canteen transaction deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete canteen transaction' }, { status: 400 });
  }
}