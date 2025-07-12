// API route for campaigns resource
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma/client';
import { ApiCache } from '../../../lib/cache';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Try to get from cache first
    let campaigns = await ApiCache.getCampaigns();
    
    if (!campaigns) {
      console.log('🔥 CAMPAIGNS CACHE MISS - Fetching from database');
      campaigns = await prisma.campaign.findMany({ include: { activities: true } });
      await ApiCache.setCampaigns(campaigns);
      console.log('💾 Campaigns cached for next request');
    } else {
      console.log('⚡ CAMPAIGNS CACHE HIT - Returning cached data');
    }
    
    return NextResponse.json(campaigns, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch campaigns' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const campaign = await prisma.campaign.create({ data });
    
    // Invalidate cache after creating new campaign
    await ApiCache.invalidateCampaigns();
    console.log('🗑️ Campaigns cache invalidated after creation');
    
    return NextResponse.json(campaign, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create campaign' }, { status: 400 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, ...data } = await req.json();
    const campaign = await prisma.campaign.update({ where: { id }, data });
    
    // Invalidate cache after updating campaign
    await ApiCache.invalidateCampaigns();
    console.log('🗑️ Campaigns cache invalidated after update');
    
    return NextResponse.json(campaign, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update campaign' }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    await prisma.campaign.delete({ where: { id } });
    
    // Invalidate cache after deleting campaign
    await ApiCache.invalidateCampaigns();
    console.log('🗑️ Campaigns cache invalidated after deletion');
    
    return NextResponse.json({ message: 'Campaign deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete campaign' }, { status: 400 });
  }
}
