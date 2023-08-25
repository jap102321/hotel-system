'use client';

import { useEffect, useState } from 'react';
import styles from '@/app/components/styles/HotelInfo.module.css';
import Link from 'next/link';
import Button from '@/app/components/Button';
import Image from 'next/image';

export default function GetRooms({ params }) {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const city = params.city.toLowerCase();
    fetch(`http://localhost:3000/api/rooms/`)
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, [params.city]);

  return (
    <div>
      <h1>Las habitaciones en este hotel son</h1>
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
            </div>
          </div>
        );
      })}
    </div>
  );
}
