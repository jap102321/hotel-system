'use client';
import { useState } from 'react';
import styles from '../page.module.css';
import Button from './Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createContext } from 'react';
import DateContext from '../contexts/DateContext';

export default function SearchHotel() {
  const [city, setCity] = useState('');
  const [cinDate, setCindate] = useState('');
  const [coutDate, setCouddate] = useState('');
  const [guests, setGuests] = useState('');

  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();

    router.push(`/guest/${city}`);
  };

  let date1 = cinDate;
  let date2 = coutDate;

  return (
    <DateContext.Provider value={{ date1, date2 }}>
      <form className={styles.form} onSubmit={onSubmit}>
        <div>
          <p>Ciudad</p>
          <input
            type='text'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <p>Fecha llegada</p>
          <input
            type='date'
            value={cinDate}
            onChange={(e) => setCindate(e.target.value)}
          />
        </div>
        <div>
          <p>Fecha check-out</p>
          <input
            type='date'
            value={coutDate}
            onChange={(e) => setCouddate(e.target.value)}
          />
        </div>
        <div>
          <p>Numero de huespedes</p>
          <input
            type='number'
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </div>
        <Button>Buscar</Button>
      </form>
    </DateContext.Provider>
  );
}
