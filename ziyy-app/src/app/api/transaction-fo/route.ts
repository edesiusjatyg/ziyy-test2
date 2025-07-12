// API route for transactions resource
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma/client';
import { ApiCache } from '../../../lib/cache';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Try to get from cache first
    let txs = await ApiCache.getTxFo();
    
    if (!txs) {
      console.log('🔥 TRANSACTION-FO CACHE MISS - Fetching from database');
      txs = await prisma.txFo.findMany();
      await ApiCache.setTxFo(txs);
      console.log('💾 Transaction-FO cached for next request');
    } else {
      console.log('⚡ TRANSACTION-FO CACHE HIT - Returning cached data');
    }
    
    return NextResponse.json(txs, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch fo transactions' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const tx = await prisma.txFo.create({ data });
    
    // Invalidate cache after creating new transaction
    await ApiCache.invalidateTxFo();
    console.log('🗑️ Transaction-FO cache invalidated after creation');
    
    return NextResponse.json(tx, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create fo transaction' }, { status: 400 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, ...data } = await req.json();
    const tx = await prisma.txFo.update({ where: { id }, data });
    
    // Invalidate cache after updating transaction
    await ApiCache.invalidateTxFo();
    console.log('🗑️ Transaction-FO cache invalidated after update');
    
    return NextResponse.json(tx, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update fo transaction' }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    await prisma.txFo.delete({ where: { id } });
    
    // Invalidate cache after deleting transaction
    await ApiCache.invalidateTxFo();
    console.log('🗑️ Transaction-FO cache invalidated after deletion');
    
    return NextResponse.json({ message: 'FO transaction deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete fo transaction' }, { status: 400 });
  }
}
