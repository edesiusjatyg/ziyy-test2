// API route for transactions resource
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma/client';
import { ApiCache } from '../../../lib/cache';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Try to get from cache first
    let transactions = await ApiCache.getTxCanteen();
    
    if (!transactions) {
      console.log('🔥 TRANSACTION-CANTEEN CACHE MISS - Fetching from database');
      transactions = await prisma.txCanteen.findMany();
      await ApiCache.setTxCanteen(transactions);
      console.log('💾 Transaction-Canteen cached for next request');
    } else {
      console.log('⚡ TRANSACTION-CANTEEN CACHE HIT - Returning cached data');
    }
    
    return NextResponse.json(transactions, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch canteen transactions' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const transaction = await prisma.txCanteen.create({ data });
    
    // Invalidate cache after creating new transaction
    await ApiCache.invalidateTxCanteen();
    console.log('🗑️ Transaction-Canteen cache invalidated after creation');
    
    return NextResponse.json(transaction, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create canteen transaction' }, { status: 400 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, ...data } = await req.json();
    const transaction = await prisma.txCanteen.update({ where: { id }, data });
    
    // Invalidate cache after updating transaction
    await ApiCache.invalidateTxCanteen();
    console.log('🗑️ Transaction-Canteen cache invalidated after update');
    
    return NextResponse.json(transaction, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update canteen transaction' }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    await prisma.txCanteen.delete({ where: { id } });
    
    // Invalidate cache after deleting transaction
    await ApiCache.invalidateTxCanteen();
    console.log('🗑️ Transaction-Canteen cache invalidated after deletion');
    
    return NextResponse.json({ message: 'Canteen transaction deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete canteen transaction' }, { status: 400 });
  }
}