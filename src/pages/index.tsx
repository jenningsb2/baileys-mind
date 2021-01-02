import { RootLayout } from '@/components/layouts/RootLayout/RootLayout';
import { PrimaryLayout } from '@/components/layouts/PrimaryLayout/PrimaryLayout';
import { NextSeo } from 'next-seo';

import styles from '@scss/pages/Home.module.scss';
import { PageWithLayoutType } from '@/components/layouts/layouts.model';
import classnames from 'classnames';
import { FeaturedPosts } from '@/components/FeaturedPosts/FeaturedPosts';

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
        <section className='m-b-xl'>
          <h1 className='fz-xl lh-tight m-b-lg'>Hey there,</h1>
          <p>
            Welcome to my personal site. You'll find notes on product
            management, customer research, strategy, life meaning, and any other
            topics that I find myself learning about.
          </p>
        </section>
        <FeaturedPosts />
      </div>
    </>
  );
};

(Home as PageWithLayoutType).getLayout = (page) => {
  return (
    <RootLayout>
      <PrimaryLayout>{page}</PrimaryLayout>
    </RootLayout>
  );
};

export default Home;
