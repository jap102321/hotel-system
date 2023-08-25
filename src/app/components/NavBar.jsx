'use client';
import Link from 'next/link';
import styles from './styles/Navbar.module.css';
import { useState } from 'react';

export default function Navbar() {
  const [isLogged, setLog] = useState(false);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.nav__list}>
        <li>
          <Link href='/'>Home</Link>
        </li>
        {!isLogged && (
          <li onClick={() => setLog(true)}>
            <Link href='/login'>Iniciar sesión</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
