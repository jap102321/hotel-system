'use client';
import { useState } from 'react';
import styles from './styles/SignIn.module.css';
import { useRouter } from 'next/navigation';

export default function BasicFormReservation({ method, params }) {
  const router = useRouter();
  const [guests, setGuests] = useState([]);
  const [newGuest, setNewGuest] = useState({
    name: '',
    dateOfBirth: '',
    documentType: '',
    docNumber: '',
    email: '',
    contactPhone: '',
  });

  const handleAddGuest = () => {
    setGuests([...guests, { ...newGuest }]);
    setNewGuest({
      name: '',
      dateOfBirth: '',
      documentType: '',
      docNumber: '',
      email: '',
      contactPhone: '',
      roomId: params.id,
    });
  };

  const handleRemoveGuest = (index) => {
    const updatedGuests = guests.filter((_, i) => i !== index);
    setGuests(updatedGuests);
  };

  const handleChangeGuest = (index, field, value) => {
    const updatedGuests = guests.map((guest, i) =>
      i === index ? { ...guest, [field]: value } : guest
    );
    setGuests(updatedGuests);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      // Otras propiedades de la reserva...
      guests: guests,
    };

    const res = await fetch('http://localhost:3000/api/guest', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      router.push(`/reservations/${params.id}`);
    }
  };

  const inputs = [
    {
      title: 'name',
      placeholder: 'Nombre huesped',
      type: 'text',
    },
    {
      title: 'dateOfBirth',
      placeholder: 'Código del hotel',
      type: 'date',
    },
    {
      title: 'documentType',
      placeholder: 'Tipo de documento',
      type: 'text',
    },
    {
      title: 'docNumber',
      placeholder: 'Número de documento',
      type: 'text',
    },
    {
      title: 'email',
      placeholder: 'jupago14@gmail.com',
      type: 'email',
    },
    {
      title: 'contactPhone',
      placeholder: 'Numero de contacto',
      type: 'text',
    },
  ];

  return (
    <form onSubmit={handleSubmit} className={styles.sign__form}>
      <h1>Añade personas a la reserva</h1>
      {guests.map((guest, index) => (
        <div key={index}>
          <h5>Huésped {index + 1}</h5>
          {inputs.map((input) => (
            <div key={input.title}>
              <h5 style={{ marginBlock: '.5rem' }}>{input.placeholder}</h5>
              <input
                id={input.title}
                name={input.title}
                onChange={(e) =>
                  handleChangeGuest(index, input.title, e.target.value)
                }
                value={guest[input.title]} // Usar el valor del huésped actual
                type={input.type}
                className={styles.input}
                placeholder={input.placeholder}
              />
            </div>
          ))}
          <button type='button' onClick={() => handleRemoveGuest(index)}>
            Eliminar
          </button>
        </div>
      ))}
      <h5>Agregar nuevo huésped</h5>
      {inputs.map((input) => (
        <input
          key={input.title}
          type={input.type || 'text'} // Usar el tipo predeterminado si no está definido
          placeholder={input.placeholder}
          value={newGuest[input.title]}
          onChange={(e) =>
            setNewGuest({ ...newGuest, [input.title]: e.target.value })
          }
          className={styles.input}
        />
      ))}
      <button type='button' onClick={handleAddGuest}>
        Agregar Huésped
      </button>
      <button type='submit'>Enviar Reserva</button>
    </form>
  );
}
