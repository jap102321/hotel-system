import { prisma } from '@/libs/prisma';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const data = await request.json();
  const formattedDate = data;
  const newReservation = await prisma.reservation.create({
    data: {
      totalPrice: data.totalPrice,
      startDate: data.startDate,
      endDate: data.endDate,
      clientName: data.clientName,
      roomId: Number(data.roomId),
    },
  });
  return NextResponse.json(newReservation);
}
