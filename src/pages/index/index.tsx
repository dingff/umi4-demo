import yayJpg from '@/assets/yay.jpg';
import { Button, Tab, DatePicker } from '@alifd/next';
import styles from './index.scss'

export default function HomePage() {
  return (
    <div className={styles.title}>
      <h2>Yay! Welcome to umi!</h2>
      <Button type='primary'>23</Button>
      <DatePicker />
      <Tab>
        <Tab.Item title="Home" key="1">
          Home content
        </Tab.Item>
        <Tab.Item title="Documentation" key="2">
          Doc content
        </Tab.Item>
        <Tab.Item title="Help" key="3">
          Help Content
        </Tab.Item>
      </Tab>,
      <div className='big'>哈哈哈哈哈</div>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
