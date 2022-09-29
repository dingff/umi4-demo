import yayJpg from '@/assets/yay.jpg';
import styles from './index.scss'

export default function HomePage() {
  return (
    <div className={styles.title}>
      <h2>Yay! Welcome to umi!</h2>
      <div>444666</div>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
