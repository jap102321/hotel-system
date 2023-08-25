import Image from 'next/image';
import styles from './page.module.css';
import SearchHotel from './components/SearchHotel';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Image
          src='/img/banner.jpg'
          layout='fill'
          objectFit='cover'
          alt='banner'
        />
      </div>
      <SearchHotel />
    </div>
  );
}
