import { PageWithLayoutType } from '@/components/layouts/layouts.model';
import { RootLayout } from '@/components/layouts/RootLayout/RootLayout';
import { NextSeo } from 'next-seo';
import { Heading } from '@/components/elements/Heading';

const Reading: React.FC = () => {
  const title = 'Bailey Jennings - Reading';
  const SEO = {
    title,
    openGraph: {
      title,
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <Heading css={{ mb: '$6' }}>Reading</Heading>
    </>
  );
};

(Reading as PageWithLayoutType).getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};
export default Reading;
