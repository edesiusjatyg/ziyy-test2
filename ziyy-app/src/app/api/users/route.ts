// API route for users resource
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const user = await prisma.user.create({ data });
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create user' }, { status: 400 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, ...data } = await req.json();
    const user = await prisma.user.update({ where: { id }, data });
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update user' }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    await prisma.user.delete({ where: { id } });
    return NextResponse.json({ message: 'User deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 400 });
  }
}
