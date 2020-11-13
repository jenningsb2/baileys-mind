import { MainLayout } from '@/components/layouts/MainLayout/MainLayout';
import { NextSeo } from 'next-seo';

const Notes: React.FC = () => {
  const title = 'Bailey Jennings - Notes';
  const SEO = {
    title,
    openGraph: {
      title,
    },
  };
  return (
    <MainLayout>
      <NextSeo {...SEO} />
      <h1>Notes</h1>
    </MainLayout>
  );
};

export default Notes;
