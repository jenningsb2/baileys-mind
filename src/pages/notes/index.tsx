import { PageWithLayoutType } from '@/components/layouts/layouts.model';
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
    <>
      <NextSeo {...SEO} />
      <h1>Notes</h1>
    </>
  );
};

(Notes as PageWithLayoutType).getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
export default Notes;
