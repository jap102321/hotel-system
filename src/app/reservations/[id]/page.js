'use client';
import styles from './Reserv.module.css';
import { useState, useEffect } from 'react';
import RenderReservation from './RenderReserv';

export default function ReservationInfo({ params }) {
  const [reservation, setReservation] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/reservation/${params.id}`)
      .then((res) => res.json())
      .then((data) => setReservation(data));
  }, [params.id]);

  return (
    <div className={styles.data}>
      <RenderReservation reservations={reservation} />
    </div>
  );
}
