'use client';
import Link from 'next/link';
import styles from './styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.nav__list}>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/login'>Iniciar sesión</Link>
        </li>
      </ul>
    </nav>
  );
}
