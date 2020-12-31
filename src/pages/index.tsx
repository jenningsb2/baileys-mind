import { MainLayout } from '@/components/layouts/MainLayout/MainLayout';
import { NextSeo } from 'next-seo';

import styles from '@scss/pages/Home.module.scss';
import { PageWithLayoutType } from '@/components/layouts/layouts.model';

const Home: React.FC = () => {
  const title = 'Bailey Jennings - Home';
  const SEO = {
    title,
    openGraph: {
      title,
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <div className={styles.container}>
        <h1>Home</h1>
      </div>
    </>
  );
};

(Home as PageWithLayoutType).getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
