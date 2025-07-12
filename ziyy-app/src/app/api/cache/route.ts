import { NextRequest, NextResponse } from 'next/server';
import { ApiCache } from '../../../lib/cache';

export async function GET(req: NextRequest) {
  try {
    // Check what's in cache
    const members = await ApiCache.getMembers();
    const statisticCounts = await ApiCache.getStatisticCounts();
    
    return NextResponse.json({
      cache_status: {
        members: members ? `${members.length} members cached` : 'No members in cache',
        statistic_counts: statisticCounts ? 'statistic counts cached' : 'No statistic counts in cache'
      },
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to check cache' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    await ApiCache.invalidateAll();
    return NextResponse.json({ message: 'All cache cleared' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to clear cache' }, { status: 500 });
  }
}
