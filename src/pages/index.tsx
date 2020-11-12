import Head from 'next/head';
import styles from '@scss/pages/Home.module.scss';
import Link from 'next/link';
import { MainLayout } from '@/components/layouts/MainLayout/MainLayout';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <div className={styles.container}>
        <h1>Home</h1>
        <Link href='notes/complements-are-useless-in-discovery'>
          <a>Article</a>
        </Link>
      </div>
    </MainLayout>
  );
};

export default Home;
