import { prisma } from '@/libs/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const rooms = await prisma.room.findMany();

  return NextResponse.json(rooms);
}

export async function POST(request) {
  const data = await request.json();
  console.log(data);

  const newRoom = await prisma.room.create({
    data: {
      roomNumber: Number(data.roomNumber),
      Hotel: {
        connect: { id: Number(data.hotelId) }, // Conecta con el hotel usando su ID
      },
      roomType: data.roomType,
      price: Number(data.price),
      taxes: Number(data.taxes),
      image: data.image,
      isReserved: false,
    },
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Room creada', room: newRoom }),
  };
}
