import { prisma } from '@/libs/prisma';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const reservation = await prisma.reservation.findUnique({
    where: {
      reservationNumber: Number(params.id),
    },
    include: {
      guests: true,
    },
  });

  return NextResponse.json(reservation);
}
