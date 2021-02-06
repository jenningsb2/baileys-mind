import { RootLayout } from '@/components/common/layouts/RootLayout/RootLayout';
import { PrimaryLayout } from '@/components/common/layouts/PrimaryLayout/PrimaryLayout';
import { NextSeo } from 'next-seo';

import { PageWithLayoutType } from '@/components/common/layouts/layouts.model';
import { FeaturedWritings } from '@/components/home/FeaturedWritings/FeaturedWritings';
import { Heading } from '@/components/common/primitives/Heading';
import { styled } from 'stitches.config';
import { Paragraph } from '@/components/common/primitives/Paragraph';
import { Box } from '@/components/common/Box/Box';
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
          <Heading size='7' css={{ mb: '$5', bp1: { fz: '$6' } }}>
            Hey there,
          </Heading>
          <Paragraph
            size='4'
            css={{ lh: '$primary', bp1: { fz: '$3', lh: '$loose' } }}>
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
