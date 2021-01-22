import Head from 'next/head';
import App from '@/components/C';
import styles from '../styles/Home.module.css';

const Home: React.FC<API.InfoRequest> = () => (
  <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <App id="1" />
  </div>
);

export default Home;
