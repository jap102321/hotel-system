'use client';
import { useEffect, useState } from 'react';
import styles from '@/app/components/styles/HotelCard.module.css';
import Link from 'next/link';
import Button from '@/app/components/Button';

export default function GetHotels({ params }) {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const city = params.city.toLowerCase();
    fetch(`http://localhost:3000/api/guest/${params.city}`)
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, [params.city]);

  return (
    <div>
      <h1>Los hoteles en {params.city} son</h1>
      {hotels?.map((hotel) => {
        return (
          <div
            className={styles.card}
            style={{ backgroundImage: `url(/img/exterior.jpg)` }}
            key={hotel.id}
          >
            <p>{hotel.name}</p>
            <div className={styles.user__actions}>
              <Link href={`/guest/${params.city}/${hotel.id}`}>
                <Button>Más Información </Button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
