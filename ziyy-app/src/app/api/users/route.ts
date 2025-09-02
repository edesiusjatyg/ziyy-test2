// API route for users resource
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma/client';
import { ApiCache } from '../../../lib/cache';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Try to get from cache first
    let users = await ApiCache.getUsers();
    
    if (!users) {
      console.log('🔥 USERS CACHE MISS - Fetching from database');
      users = await prisma.user.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          username: true,
          role: true,
          passwordHash: true,
          createdAt: true,
          lastLogin: true
        }
      });
      await ApiCache.setUsers(users);
      console.log('💾 Users cached for next request');
    } else {
      console.log('⚡ USERS CACHE HIT - Returning cached data');
    }
    
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, username, password, role } = await req.json();
    
    // Validate required fields
    if (!username || !password || !role) {
      return NextResponse.json({ 
        error: 'Missing required fields: username, password, and role are required' 
      }, { status: 400 });
    }

    // Hash password using bcrypt
    const saltRounds = 12;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    
    const userData = {
      name: name || null,
      email: email || null,
      username,
      passwordHash,
      role
    };

    console.log('Creating user with data:', { ...userData, passwordHash: '[HIDDEN]' });
    
    const user = await prisma.user.create({ data: userData });
    
    // Remove password hash from response
    const { passwordHash: _, ...userResponse } = user;
    
    // Invalidate cache after creating new user
    await ApiCache.invalidateUsers();
    console.log('🗑️ Users cache invalidated after creation');
    
    return NextResponse.json(userResponse, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    
    // Handle Prisma specific errors
    if (error instanceof Error) {
      if (error.message.includes('Unique constraint')) {
        return NextResponse.json({ 
          error: 'Username or email already exists' 
        }, { status: 400 });
      }
    }
    
    return NextResponse.json({ 
      error: 'Failed to create user',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 400 });
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
    console.error('Error updating user:', error);
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
