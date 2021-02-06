import { PageWithLayoutType } from '@/components/common/layouts/layouts.model';
import { PrimaryLayout } from '@/components/common/layouts/PrimaryLayout/PrimaryLayout';
import { RootLayout } from '@/components/common/layouts/RootLayout/RootLayout';
import { Paths } from '@/data/paths';
import Link from 'next/link';

const FourZeroFour: PageWithLayoutType<{}> = () => {
  return (
    <>
      <h1>Oops, nothing to see here.</h1>
      <Link href={Paths.home}>
        <a>Back to home.</a>
      </Link>
    </>
  );
};

FourZeroFour.getLayout = (page) => {
  return (
    <RootLayout>
      <PrimaryLayout>{page}</PrimaryLayout>
    </RootLayout>
  );
};
export default FourZeroFour;
