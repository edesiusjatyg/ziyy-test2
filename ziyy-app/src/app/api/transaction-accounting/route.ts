// API route for transactions resource
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const transactions = await prisma.txAccounting.findMany();
    return NextResponse.json(transactions, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch accounting transactions' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const transaction = await prisma.txAccounting.create({ data });
    return NextResponse.json(transaction, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create accounting transaction' }, { status: 400 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, ...data } = await req.json();
    const transaction = await prisma.txAccounting.update({ where: { id }, data });
    return NextResponse.json(transaction, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update accounting transaction' }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    await prisma.txAccounting.delete({ where: { id } });
    return NextResponse.json({ message: 'Accounting transaction deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete accounting transaction' }, { status: 400 });
  }
}