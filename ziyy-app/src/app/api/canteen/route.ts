// // API route for canteen resource
// import { NextRequest, NextResponse } from 'next/server';
// import { PrismaClient } from '../../../generated/prisma/client';
// import { ApiCache } from '../../../lib/cache';

// const prisma = new PrismaClient();

// export async function GET() {
//   try {
//     // Try to get from cache first
//     let txs = await ApiCache.getCanteenWithItems();
    
//     if (!txs) {
//       console.log('🔥 CANTEEN-WITH-ITEMS CACHE MISS - Fetching from database');
//       txs = await prisma.txCanteen.findMany({ include: { item: true } });
//       await ApiCache.setCanteenWithItems(txs);
//       console.log('💾 Canteen-with-items cached for next request');
//     } else {
//       console.log('⚡ CANTEEN-WITH-ITEMS CACHE HIT - Returning cached data');
//     }
    
//     return NextResponse.json(txs, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: 'Failed to fetch canteen transactions' }, { status: 500 });
//   }
// }

// export async function POST(req: NextRequest) {
//   try {
//     const data = await req.json();
//     const tx = await prisma.txCanteen.create({ data });
    
//     // Invalidate both canteen caches after creating new transaction
//     await ApiCache.invalidateCanteenWithItems();
//     await ApiCache.invalidateTxCanteen();
//     console.log('🗑️ Canteen caches invalidated after creation');
    
//     return NextResponse.json(tx, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ error: 'Failed to create canteen transaction' }, { status: 400 });
//   }
// }

// export async function PUT(req: NextRequest) {
//   try {
//     const { id, ...data } = await req.json();
//     const tx = await prisma.txCanteen.update({ where: { id }, data });
    
//     // Invalidate both canteen caches after updating transaction
//     await ApiCache.invalidateCanteenWithItems();
//     await ApiCache.invalidateTxCanteen();
//     console.log('🗑️ Canteen caches invalidated after update');
    
//     return NextResponse.json(tx, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: 'Failed to update canteen transaction' }, { status: 400 });
//   }
// }

// export async function DELETE(req: NextRequest) {
//   try {
//     const { id } = await req.json();
//     await prisma.txCanteen.delete({ where: { id } });
    
//     // Invalidate both canteen caches after deleting transaction
//     await ApiCache.invalidateCanteenWithItems();
//     await ApiCache.invalidateTxCanteen();
//     console.log('🗑️ Canteen caches invalidated after deletion');
    
//     return NextResponse.json({ message: 'Canteen transaction deleted' }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: 'Failed to delete canteen transaction' }, { status: 400 });
//   }
// }
