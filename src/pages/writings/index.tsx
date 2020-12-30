import { PageWithLayoutType } from '@/components/layouts/layouts.model';
import { MainLayout } from '@/components/layouts/MainLayout/MainLayout';
import { NextSeo } from 'next-seo';

const Writings: React.FC = () => {
  const title = 'Bailey Jennings - Writings';
  const SEO = {
    title,
    openGraph: {
      title,
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <h1>Writings</h1>
    </>
  );
};

(Writings as PageWithLayoutType).getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
export default Writings;
