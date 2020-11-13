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
    <MainLayout>
      <NextSeo {...SEO} />
      <h1>About</h1>
    </MainLayout>
  );
};

export default About;
