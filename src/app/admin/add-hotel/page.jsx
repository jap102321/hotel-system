import BasicForm from '@/app/components/BasicFormHotel';
import styles from './AddHotel.module.css';

export default async function AddHotel() {
  return (
    <div className={styles.container}>
      <BasicForm method={'POST'} />
    </div>
  );
}
