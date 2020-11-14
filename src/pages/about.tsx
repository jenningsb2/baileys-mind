import { PageWithLayoutType } from '@/components/layouts/layouts.model';
import { MainLayout } from '@/components/layouts/MainLayout/MainLayout';
import { NextSeo } from 'next-seo';

const About: React.FC = () => {
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
      <h1>About</h1>
    </>
  );
};

(About as PageWithLayoutType).getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
export default About;
