import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma/client';
import { ApiCache } from '../../../lib/cache';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Try to get from cache first
    let transactions = await ApiCache.getTxAccounting();
    
    if (!transactions) {
      console.log('🔥 TRANSACTION-ACCOUNTING CACHE MISS - Fetching from database');
      transactions = await prisma.txAccounting.findMany();
      await ApiCache.setTxAccounting(transactions);
      console.log('💾 Transaction-Accounting cached for next request');
    } else {
      console.log('⚡ TRANSACTION-ACCOUNTING CACHE HIT - Returning cached data');
    }
    
    return NextResponse.json(transactions, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch accounting transactions' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const transaction = await prisma.txAccounting.create({ data });
    
    // Invalidate cache after creating new transaction
    await ApiCache.invalidateTxAccounting();
    console.log('🗑️ Transaction-Accounting cache invalidated after creation');
    
    return NextResponse.json(transaction, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create accounting transaction' }, { status: 400 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, ...data } = await req.json();
    const transaction = await prisma.txAccounting.update({ where: { id }, data });
    
    // Invalidate cache after updating transaction
    await ApiCache.invalidateTxAccounting();
    console.log('🗑️ Transaction-Accounting cache invalidated after update');
    
    return NextResponse.json(transaction, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update accounting transaction' }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    await prisma.txAccounting.delete({ where: { id } });
    
    // Invalidate cache after deleting transaction
    await ApiCache.invalidateTxAccounting();
    console.log('🗑️ Transaction-Accounting cache invalidated after deletion');
    
    return NextResponse.json({ message: 'Accounting transaction deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete accounting transaction' }, { status: 400 });
  }
}