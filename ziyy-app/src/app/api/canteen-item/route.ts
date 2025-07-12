// API route for canteen items resource
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma/client';
import { ApiCache } from '../../../lib/cache';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Try to get from cache first
    let canteenItems = await ApiCache.getCanteenItems();
    
    if (!canteenItems) {
      console.log('🔥 CANTEEN-ITEMS CACHE MISS - Fetching from database');
      canteenItems = await prisma.canteenItem.findMany({
        orderBy: { name: 'asc' }
      });
      await ApiCache.setCanteenItems(canteenItems);
      console.log('💾 Canteen-items cached for next request');
    } else {
      console.log('⚡ CANTEEN-ITEMS CACHE HIT - Returning cached data');
    }
    
    return NextResponse.json(canteenItems, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch canteen items' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const canteenItem = await prisma.canteenItem.create({ data });
    
    // Invalidate canteen items cache after creating new item
    await ApiCache.invalidateCanteenItems();
    console.log('🗑️ Canteen-items cache invalidated after creation');
    
    return NextResponse.json(canteenItem, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create canteen item' }, { status: 400 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, ...data } = await req.json();
    const canteenItem = await prisma.canteenItem.update({ where: { id }, data });
    
    // Invalidate canteen items cache after updating item
    await ApiCache.invalidateCanteenItems();
    console.log('🗑️ Canteen-items cache invalidated after update');
    
    return NextResponse.json(canteenItem, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update canteen item' }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    await prisma.canteenItem.delete({ where: { id } });
    
    // Invalidate canteen items cache after deleting item
    await ApiCache.invalidateCanteenItems();
    console.log('🗑️ Canteen-items cache invalidated after deletion');
    
    return NextResponse.json({ message: 'Canteen item deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete canteen item' }, { status: 400 });
  }
}
