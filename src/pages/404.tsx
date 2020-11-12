import { MainLayout } from '@/components/layouts/MainLayout/MainLayout';
import Link from 'next/link';

const FourZeroFour: React.FC = () => {
  return (
    <MainLayout>
      <h1>Oops, nothing to see here.</h1>
      <Link href='/'>
        <a>Back to home.</a>
      </Link>
    </MainLayout>
  );
};

export default FourZeroFour;
