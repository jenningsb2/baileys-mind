import { RootLayout } from '@/components/layouts/RootLayout/RootLayout';
import { PrimaryLayout } from '@/components/layouts/PrimaryLayout/PrimaryLayout';
import { NextSeo } from 'next-seo';

import styles from '@scss/pages/Home.module.scss';
import { PageWithLayoutType } from '@/components/layouts/layouts.model';
import { FeaturedPosts } from '@/components/FeaturedPosts/FeaturedPosts';
import { Heading } from '@/components/elements/Heading';
import { styled } from 'stitches.config';
import { Paragraph } from '@/components/elements/Paragraph';

const Intro = styled('div', {
  mb: '$6',
});

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
      <div>
        <Intro>
          <Heading size='7' css={{ mb: '$5' }}>
            Hey there,
          </Heading>
          <Paragraph size='4'>
            Welcome to my personal site. You'll find notes on product
            management, customer research, strategy, life meaning, and any other
            topics that I find myself learning about.
          </Paragraph>
        </Intro>
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
