// API route for users resource
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma/client';
import { ApiCache } from '../../../lib/cache';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Try to get from cache first
    let users = await ApiCache.getUsers();
    
    if (!users) {
      console.log('🔥 USERS CACHE MISS - Fetching from database');
      users = await prisma.user.findMany();
      await ApiCache.setUsers(users);
      console.log('💾 Users cached for next request');
    } else {
      console.log('⚡ USERS CACHE HIT - Returning cached data');
    }
    
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const user = await prisma.user.create({ data });
    
    // Invalidate cache after creating new user
    await ApiCache.invalidateUsers();
    console.log('🗑️ Users cache invalidated after creation');
    
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create user' }, { status: 400 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, ...data } = await req.json();
    const user = await prisma.user.update({ where: { id }, data });
    
    // Invalidate cache after updating user
    await ApiCache.invalidateUsers();
    console.log('🗑️ Users cache invalidated after update');
    
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update user' }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    await prisma.user.delete({ where: { id } });
    
    // Invalidate cache after deleting user
    await ApiCache.invalidateUsers();
    console.log('🗑️ Users cache invalidated after deletion');
    
    return NextResponse.json({ message: 'User deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 400 });
  }
}
