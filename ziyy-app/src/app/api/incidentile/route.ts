// API route for incidentile resource
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma/client';
import { ApiCache } from '../../../lib/cache';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Try to get from cache first
    let incidentiles = await ApiCache.getIncidentiles();
    
    if (!incidentiles) {
      console.log('🔥 INCIDENTILES CACHE MISS - Fetching from database');
      incidentiles = await prisma.incidentile.findMany();
      await ApiCache.setIncidentiles(incidentiles);
      console.log('💾 Incidentiles cached for next request');
    } else {
      console.log('⚡ INCIDENTILES CACHE HIT - Returning cached data');
    }
    
    return NextResponse.json(incidentiles, { status: 200 });
  } catch (error) {
    console.error('Error fetching incidentiles:', error);
    return NextResponse.json({ 
      error: 'Failed to fetch incidentiles',
      message: typeof error === 'object' && error !== null && 'message' in error ? (error as { message: string }).message : String(error),
      details: error
    }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const incidentile = await prisma.incidentile.create({ data });
    
    // Invalidate cache after creating new incidentile
    await ApiCache.invalidateIncidentiles();
    console.log('🗑️ Incidentiles cache invalidated after creation');
    
    return NextResponse.json(incidentile, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create incidentile' }, { status: 400 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, ...data } = await req.json();
    const incidentile = await prisma.incidentile.update({ where: { id }, data });
    
    // Invalidate cache after updating incidentile
    await ApiCache.invalidateIncidentiles();
    console.log('🗑️ Incidentiles cache invalidated after update');
    
    return NextResponse.json(incidentile, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update incidentile' }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    await prisma.incidentile.delete({ where: { id } });
    
    // Invalidate cache after deleting incidentile
    await ApiCache.invalidateIncidentiles();
    console.log('🗑️ Incidentiles cache invalidated after deletion');
    
    return NextResponse.json({ message: 'Incidentile deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete incidentile' }, { status: 400 });
  }
}
