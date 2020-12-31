import { PageWithLayoutType } from '@/components/layouts/layouts.model';
import { RootLayout } from '@/components/layouts/RootLayout/RootLayout';
import { Paths } from '@/data/paths';
import Link from 'next/link';

const FourZeroFour: React.FC = () => {
  return (
    <>
      <h1>Oops, nothing to see here.</h1>
      <Link href={Paths.home}>
        <a>Back to home.</a>
      </Link>
    </>
  );
};

(FourZeroFour as PageWithLayoutType).getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};
export default FourZeroFour;
