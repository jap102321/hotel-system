'use client';
import Image from 'next/image';
import styles from './styles/HotelCard.module.css';
import { useState, useEffect } from 'react';
import Button from './Button';
import Link from 'next/link';
export default function HotelCard() {
  const [shotel, setHotel] = useState([]);
  const [enabled, setEnabledState] = useState(true);

  useEffect(() => {
    {
      fetch('http://localhost:3000/api/hotels')
        .then((res) => res.json())
        .then((data) => setHotel(data));
    }
  }, []);

  const disableHotel = () => {
    setEnabledState(!enabled);
  };
  return (
    <div className={styles.container}>
      {shotel.map((hotel) => {
        return (
          <div className={styles.card} key={hotel.id}>
            <Image src='/' height={200} width={200} alt='a' />
            <p>{hotel.name}</p>
            <p>Ubicado en {hotel.location}</p>
            <div className={styles.admin__actions}>
              {enabled && (
                <Link href={`/admin/${hotel.id}`}>
                  <Button>Más Información </Button>
                </Link>
              )}
              <Button onClickFun={disableHotel}>
                {enabled ? 'Inhabilitar' : 'Habilitar'}
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
