import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '../../../generated/prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const { name, phone, startTime, endTime } = await req.json();
        if (!name || !startTime || !endTime) {
            return NextResponse.json({ error: "Nama, waktu mulai, dan waktu selesai wajib diisi." }, { status: 400 });
        }

        const saunaUsage = await prisma.saunaUsage.create({
            data: {
                name,
                phone,
                startTime: new Date(startTime),
                endTime: new Date(endTime)
            }
        });
        return NextResponse.json(saunaUsage);
    } catch (err) {
        return NextResponse.json({ error: "Gagal mencatat penggunaan sauna" }, { status: 500 });
    }
}
