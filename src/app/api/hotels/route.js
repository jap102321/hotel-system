import { prisma } from '@/libs/prisma';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const hotels = await prisma.hotel.findMany();

  return NextResponse.json(hotels);
}

export async function POST(request) {
  const { name, image, location } = await request.json();
  const newHotel = await prisma.hotel.create({
    data: {
      name,
      image,
      location,
    },
  });
  return NextResponse.json(newHotel);
}
