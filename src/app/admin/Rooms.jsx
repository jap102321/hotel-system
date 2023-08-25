'use client';
import styles from '@/app/components/styles/HotelInfo.module.css';
import Button from '@/app/components/Button';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import RenderRooms from '../components/RenderRooms';

export default function Rooms({ params }) {
  const [name, setName] = useState('');
  const [rooms, setRooms] = useState([]);
  const router = useRouter();

  useEffect(() => {
    //Renders Rooms by ID calling trough params.
    fetch(`http://localhost:3000/api/hotels/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setRooms(data.rooms);
      });
  }, [params.id]);

  return (
    <>
      <p onClick={() => router.push('/admin')} className={styles.back__text}>
        ⬅️ Volver
      </p>
      <h1>{name}</h1>
      <Link href={`/admin/${params.id}/edit-hotel`}>
        <Button>Editar Hotel</Button>
      </Link>
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <h3>Habitaciones disponibles</h3>
          <Link href={`/admin/${params.id}/add-room`}>
            <Button>Añadir habitación</Button>
          </Link>
        </div>
        {/* Renders Rooms */}
        <RenderRooms rooms={rooms} params={params} />
      </div>
    </>
  );
}
