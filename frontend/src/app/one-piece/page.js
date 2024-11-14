import Image from 'next/image';
import styles from './styles.module.css';

export default function OnePiecePage() {
  return <div className={styles.container}>
      <Image
        src="/onepiece.png"
        alt="One Piece"
        layout="fill"
        objectFit="cover"
      />
  </div>;
}
