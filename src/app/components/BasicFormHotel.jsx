'use client';
import Link from 'next/link';
import styles from './styles/SignIn.module.css';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function BasicFormHotel({ method, params }) {
  //Going back
  const router = useRouter();
  //Controlling values
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (method === 'PUT' && params.id !== undefined) {
      fetch(`http://localhost:3000/api/hotels/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setName(data.name);
          setImage(data.image);
        });
    }
  }, [method]);

  const submitData = async (e) => {
    e.preventDefault();

    if (method === 'POST') {
      const res = await fetch('http://localhost:3000/api/hotels', {
        method: method,
        body: JSON.stringify({ name, image }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();
    } else if (method === 'PUT') {
      const res = await fetch(`http://localhost:3000/api/hotels/${params.id}`, {
        method: method,
        body: JSON.stringify({ name, image }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
    }

    router.push('/admin');
  };

  //Component
  return (
    <>
      <form onSubmit={submitData} className={styles.sign__form}>
        <p onClick={() => router.back()} className={styles.back__text}>
          ⬅️ Volver
        </p>
        <h1>Añade / Modifica información</h1>
        <h5 className={styles.title}>Nombre del hotel</h5>
        <input
          id='name'
          className={styles.input}
          placeholder='Hotel U'
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h5 className={styles.title}>Imagen de muestra</h5>
        <input
          id='image'
          className={styles.input}
          placeholder='https://'
          required
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button>Enviar</button>
      </form>
    </>
  );
}
