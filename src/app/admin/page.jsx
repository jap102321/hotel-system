import Link from 'next/link';
import Button from '../components/Button';
import HotelCard from '../components/HotelCard';
import styles from './Panel.module.css';

export default async function AdminPanel() {
  return (
    <div className={styles.container}>
      <div className={styles.admin__actions}>
        <h5>Bienvenido!</h5>
        <Link href='/admin/add-hotel'>
          <Button>Añadir nuevo hotel</Button>
        </Link>
      </div>
      <HotelCard />
    </div>
  );
}
