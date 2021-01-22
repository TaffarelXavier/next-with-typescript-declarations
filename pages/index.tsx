import Head from 'next/head';
import styles from '../styles/Home.module.css';
import App from "@/components/C";
const Home: React.FC<Test> = () => {
  return (
    <div className={styles.container} >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App />
      {/* <pre>{JSON.stringify(parseT("Taffarel"), null, 2)}</pre> */}
    </div >
  );
}

export default Home;