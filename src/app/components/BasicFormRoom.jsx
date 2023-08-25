'use client';
import Link from 'next/link';
import styles from './styles/SignIn.module.css';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function BasicFormRoom({ method, params }) {
  //Going back
  const router = useRouter();
  //Controlling values
  const [allValues, setValues] = useState({
    roomNumber: '',
    hotelId: '',
    roomType: '',
    price: '',
    taxes: '',
    image: '',
  });

  useEffect(() => {
    if (method === 'PUT' && params.id !== undefined) {
      fetch(`http://localhost:3000/api/rooms/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setValues(data);
        });
    }
  }, [method, params.id]);

  const submitData = async (e) => {
    const { roomNumber, hotelId, roomType, price, taxes, image } = allValues;
    e.preventDefault();
    if (method === 'POST') {
      const res = await fetch('http://localhost:3000/api/rooms', {
        method: method,
        body: JSON.stringify({
          roomNumber,
          hotelId,
          roomType,
          price,
          taxes,
          image,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else if (method === 'PUT') {
      const res = await fetch(`http://localhost:3000/api/rooms/${params.id}`, {
        method: method,
        body: JSON.stringify({
          roomNumber,
          hotelId,
          roomType,
          price,
          taxes,
          image,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    router.push(`/admin/${params.id}`);
  };

  //Better rendering of inputs
  const inputs = [
    {
      title: 'roomNumber',
      placeholder: 'Número de habitación',
      data: allValues.roomNumber,
    },
    {
      title: 'hotelId',
      placeholder: 'Código del hotel',
      data: allValues.hotelId,
    },
    {
      title: 'roomType',
      placeholder: 'Tipo de habitación',
      data: allValues.roomType,
    },
    {
      title: 'price',
      placeholder: 'Precio',
      data: allValues.price,
    },
    {
      title: 'taxes',
      placeholder: 'Impuesto al consumidor',
      data: allValues.taxes,
    },
    {
      title: 'image',
      placeholder: 'Imagen',
      data: allValues.image,
    },
  ];

  const handleChange = (e) => {
    setValues({ ...allValues, [e.target.name]: e.target.value });
  };
  //Component
  return (
    <>
      <form onSubmit={submitData} className={styles.sign__form}>
        <p onClick={() => router.back()} className={styles.back__text}>
          ⬅️ Volver
        </p>
        <h1>Añade / Modifica información</h1>
        {inputs.map((input) => {
          return (
            <div key={input.title}>
              <h5 style={{ marginBlock: '.5rem' }}>{input.placeholder}</h5>
              <input
                id={input.title}
                name={input.title}
                onChange={handleChange}
                value={input.data}
                className={styles.input}
              />
            </div>
          );
        })}
        <button>Enviar</button>
      </form>
    </>
  );
}
