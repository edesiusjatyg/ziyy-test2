// API route for statistic statistics
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma/client';
import { ApiCache } from '../../../lib/cache';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Try to get from cache first
    let statisticCounts = await ApiCache.getStatisticCounts();
    
    if (!statisticCounts) {
      console.log('🔥 statistic COUNTS CACHE MISS - Fetching from database');
      
      // Fetch all counts in parallel
      const [
        totalMembers,
        activeMembers,
        expiredMembers,
        todayArrivals,
        weeklyArrivals,
        totalIncidentiles,
        todayIncidentiles
      ] = await Promise.all([
        prisma.member.count(),
        prisma.member.count({
          where: { 
            status: 'ACTIVE',
            expiryDate: { gte: new Date() }
          }
        }),
        prisma.member.count({
          where: { 
            OR: [
              { status: 'EXPIRED' },
              { expiryDate: { lt: new Date() } }
            ]
          }
        }),
        prisma.memberArrival.count({
          where: {
            arrivalDate: {
              gte: new Date(new Date().setHours(0, 0, 0, 0))
            }
          }
        }),
        prisma.memberArrival.count({
          where: {
            arrivalDate: {
              gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
            }
          }
        }),
        prisma.incidentile.count(),
        prisma.incidentile.count({
          where: {
            date: {
              gte: new Date(new Date().setHours(0, 0, 0, 0))
            }
          }
        })
      ]);
      
      statisticCounts = {
        members: {
          total: totalMembers,
          active: activeMembers,
          expired: expiredMembers
        },
        arrivals: {
          today: todayArrivals,
          weekly: weeklyArrivals
        },
        incidentiles: {
          total: totalIncidentiles,
          today: todayIncidentiles
        },
        lastUpdated: new Date().toISOString()
      };
      
      await ApiCache.setStatisticCounts(statisticCounts);
      console.log('💾 statistic counts cached for next request');
    } else {
      console.log('⚡ statistic COUNTS CACHE HIT - Returning cached data');
    }
    
    return NextResponse.json(statisticCounts, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch statistic counts:', error);
    return NextResponse.json({ error: 'Failed to fetch statistic counts' }, { status: 500 });
  }
}
