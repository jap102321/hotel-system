import { prisma } from '@/libs/prisma';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const hotel = await prisma.hotel.findMany({
    where: {
      location: params.city,
    },
  });

  return NextResponse.json(hotel);
}
