import { prisma } from '@/libs/prisma';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const data = await request.json();

  const newHuesped = await prisma.guest.create({
    data: {
      documentType: data.documentType,
      roomId: {
        connect: { id: Number(data.roomId) }, // Conecta con el hotel usando su ID
      },
      dateOfBirth: data.dateOfBirth,
      documentType: Number(data.price),
      email: data.email,
      contactPhone: data.contactPhone,
    },
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Room creada', room: newHuesped }),
  };
}
