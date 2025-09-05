import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '../../../../../generated/prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest, { params }: { params: { id: number } }) {
    const staffId = params.id;
    try {
        // Mark the staff as logged out in DB (example: set lastLogin to null, or set online=false)
        await prisma.user.update({
            where: { id: staffId },
            data: {
                lastLogin: null // or any other logic to mark as logged out
            }
        });
        // Optionally, invalidate session/token here if you have session management
        return NextResponse.json({ success: true });
    } catch (err) {
        return NextResponse.json({ error: "Failed to kick staff" }, { status: 500 });
    }
}
