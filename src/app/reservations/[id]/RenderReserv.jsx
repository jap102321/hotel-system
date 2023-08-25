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
      <h3>Nombre cliente principal: {reservInfo.clientName}</h3>
      <h3>Costo total: {reservInfo.totalPrice}</h3>
      <h3>Fecha inicio: {reservInfo.startDate}</h3>
      <h3>Fecha termina: {reservInfo.endDate}</h3>
    </div>
  );
}
