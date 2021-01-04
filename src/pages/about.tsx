import { PageWithLayoutType } from '@/components/layouts/layouts.model';
import { RootLayout } from '@/components/layouts/RootLayout/RootLayout';
import { NextSeo } from 'next-seo';
import { Heading } from '@/components/primitives/Heading';
import { PrimaryLayout } from '@/components/layouts/PrimaryLayout/PrimaryLayout';
import { useScrollToTop } from '@/utils/use-scroll-to-top';

const About: PageWithLayoutType<any> = () => {
  useScrollToTop();
  const title = 'Bailey Jennings - About';
  const SEO = {
    title,
    openGraph: {
      title,
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <Heading css={{ mb: '$6' }}>About</Heading>
    </>
  );
};

About.getLayout = (page) => {
  return (
    <RootLayout>
      <PrimaryLayout>{page}</PrimaryLayout>
    </RootLayout>
  );
};
export default About;
