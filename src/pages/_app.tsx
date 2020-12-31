import type { AppProps } from 'next/app';
import '@scss/globals.scss';
import { PageWithLayoutType } from '@/components/layouts/layouts.model';
import { RootLayout } from '@/components/layouts/RootLayout/RootLayout';

type MyAppProps = {
  Component: PageWithLayoutType;
  pageProps: any;
};

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout || ((page) => <RootLayout>{page}</RootLayout>);

  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
