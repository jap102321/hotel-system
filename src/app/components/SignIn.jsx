'use client';
import Link from 'next/link';
import styles from './styles/SignIn.module.css';
import { useRouter } from 'next/router';

export default function SignIn() {
  //Checks admin info to log in.
  const submitUser = (e) => {
    e.preventDefault();
    console.log(e.target.user.value);
  };

  //Component
  return (
    <form onSubmit={submitUser} className={styles.sign__form}>
      <h1>Inicia sesión</h1>
      <h5 className={styles.title}>Usuario</h5>
      <input id='user' className={styles.input} required />
      <h5 className={styles.title}>Contraseña</h5>
      <input id='password' className={styles.input} type='password' required />
      <Link href='/admin'>
        <button>Iniciar sesión</button>
      </Link>
    </form>
  );
}
