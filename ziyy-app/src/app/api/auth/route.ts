import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();
    // NOTE: In production, use hashed passwords and secure session handling!
    const user = await prisma.user.findUnique({ where: { username } });
    if (!user || user.passwordHash !== password) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
    // Dummy session response
    return NextResponse.json({ message: 'Login successful', user: { id: user.id, username: user.username, role: user.role } }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to login' }, { status: 400 });
  }
}
