import { RootLayout } from '@/components/layouts/RootLayout/RootLayout';
import { PrimaryLayout } from '@/components/layouts/PrimaryLayout/PrimaryLayout';
import { NextSeo } from 'next-seo';

import { PageWithLayoutType } from '@/components/layouts/layouts.model';
import { FeaturedWritings } from '@/components/FeaturedWritings/FeaturedWritings';
import { Heading } from '@/components/primitives/Heading';
import { styled } from 'stitches.config';
import { Paragraph } from '@/components/primitives/Paragraph';
import { Box } from '@/components/Box/Box';
import { useScrollToTop } from '@/utils/use-scroll-to-top';
import { WritingsData } from '@/@types/writings-data';
import { GetStaticProps } from 'next';
import { getAllWritingsData } from '@/utils/writings-data-helpers';
import { sortWritingsByDateDesc } from '@/utils/date-helpers';

const Intro = styled('div', {
  mb: '$6',
});
interface HomeProps {
  featuredWritings: WritingsData[];
}
const Home: PageWithLayoutType<HomeProps> = ({ featuredWritings }) => {
  useScrollToTop();
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
      <Box>
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
        <FeaturedWritings writings={featuredWritings} />
      </Box>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const writingsData = sortWritingsByDateDesc(getAllWritingsData());

  const featuredWritings: WritingsData[] = writingsData.filter(
    (writing) => writing?.metaData?.featured,
  );

  return {
    props: { featuredWritings },
  };
};
Home.getLayout = (page) => {
  return (
    <RootLayout>
      <PrimaryLayout>{page}</PrimaryLayout>
    </RootLayout>
  );
};

export default Home;
