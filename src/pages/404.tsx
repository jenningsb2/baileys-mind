import { PageWithLayoutType } from '@/components/layouts/layouts.model';
import { MainLayout } from '@/components/layouts/MainLayout/MainLayout';
import Link from 'next/link';

const FourZeroFour: React.FC = () => {
  return (
    <>
      <h1>Oops, nothing to see here.</h1>
      <Link href='/'>
        <a>Back to home.</a>
      </Link>
    </>
  );
};

(FourZeroFour as PageWithLayoutType).getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
export default FourZeroFour;
