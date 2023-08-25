'use client';
import { useEffect, useState } from 'react';
import styles from '@/app/components/styles/HotelInfo.module.css';
import Button from '@/app/components/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function RenderRooms({ rooms, params }) {
  const [roomInfo, setRooms] = useState([]);

  useEffect(() => {
    setRooms(rooms);
  }, [rooms]);

  return (
    <>
      {rooms?.map((room) => {
        return (
          <div key={room.roomNumber} className={styles.rooms}>
            <div>
              <Image
                src='/'
                height={100}
                width={100}
                alt={`Habitación ${room.roomType}`}
              />
            </div>
            <div className={styles.roomInfo}>
              <p>Numero de habitación {room.roomNumber}</p>
              <p>Tipo de habitación {room.roomType}</p>
              <p>
                Precio con impuestos por noche{' '}
                {Number(room.price) + Number(room.taxes)}$
              </p>
              <Link href={`/admin/${params.id}/edit-room`}>
                <Button>Editar habitación</Button>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}
