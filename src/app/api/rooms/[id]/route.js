import { prisma } from '@/libs/prisma';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const room = await prisma.room.findUnique({
    where: {
      roomNumber: Number(params.id),
    },
    include: {
      reservations: true,
    },
  });

  return NextResponse.json(room);
}

export async function PUT(request, { params }) {
  const data = await request.json();
  const room = await prisma.room.update({
    where: {
      roomNumber: Number(params.id),
    },
    data: data,
  });

  return NextResponse.json(room);
}
