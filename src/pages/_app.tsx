import type { AppProps } from 'next/app';
import '@scss/globals.scss';
import { PageWithLayoutType } from '@/components/layouts/layouts.model';
import { MainLayout } from '@/components/layouts/MainLayout/MainLayout';

type MyAppProps = {
  Component: PageWithLayoutType;
  pageProps: any;
};

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);

  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
