  // API route for activities resource
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma/client';
import { ApiCache } from '../../../lib/cache';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Try to get from cache first
    let activities = await ApiCache.getActivities();
    
    if (!activities) {
      console.log('🔥 ACTIVITIES CACHE MISS - Fetching from database');
      activities = await prisma.activityMarketing.findMany({ include: { campaign: true } });
      await ApiCache.setActivities(activities);
      console.log('💾 Activities cached for next request');
    } else {
      console.log('⚡ ACTIVITIES CACHE HIT - Returning cached data');
    }
    
    return NextResponse.json(activities, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch activities' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const activity = await prisma.activityMarketing.create({ data });
    
    // Invalidate cache after creating new activity
    await ApiCache.invalidateActivities();
    console.log('🗑️ Activities cache invalidated after creation');
    
    return NextResponse.json(activity, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create activity' }, { status: 400 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, ...data } = await req.json();
    const activity = await prisma.activityMarketing.update({ where: { id }, data });
    
    // Invalidate cache after updating activity
    await ApiCache.invalidateActivities();
    console.log('🗑️ Activities cache invalidated after update');
    
    return NextResponse.json(activity, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update activity' }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    await prisma.activityMarketing.delete({ where: { id } });
    
    // Invalidate cache after deleting activity
    await ApiCache.invalidateActivities();
    console.log('🗑️ Activities cache invalidated after deletion');
    
    return NextResponse.json({ message: 'Activity deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete activity' }, { status: 400 });
  }
}
