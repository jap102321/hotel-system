'use client';
import styles from './Reserv.module.css';
import { useState, useEffect } from 'react';

export default function RenderReservation({ reservations }) {
  const [reservInfo, setReservInfo] = useState([]);
  useEffect(() => {
    setReservInfo(reservations);
  }, [reservations]);
  return (
    <div className={styles.reservData}>
      <p onClick={() => router.back()} className={styles.back__text}>
        ⬅️ Volver
      </p>
      <h3>Costo total: 2200$</h3>
      <h3>Fecha inicio: 23-10-2023</h3>
      <h3>Fecha termina: 29-10-2023</h3>
    </div>
  );
}
