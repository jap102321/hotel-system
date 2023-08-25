import { prisma } from '@/libs/prisma';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const hotel = await prisma.hotel.findUnique({
    where: {
      id: Number(params.id),
    },
    include: {
      rooms: {
        include: {
          reservations: {
            include: {
              guests: true,
            },
          },
        },
      },
    },
  });

  return NextResponse.json(hotel);
}

export async function PUT(request, { params }) {
  const data = await request.json();
  const hotel = await prisma.hotel.update({
    where: {
      id: Number(params.id),
    },
    data: data,
  });

  return NextResponse.json(hotel);
}
