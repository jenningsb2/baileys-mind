import { PageWithLayoutType } from '@/components/layouts/layouts.model';
import { RootLayout } from '@/components/layouts/RootLayout/RootLayout';
import { useHunterCreditsLog } from '@/utils/hunter-credits-log';

type MyAppProps = {
  Component: PageWithLayoutType;
  pageProps: any;
};

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout || ((page) => <RootLayout>{page}</RootLayout>);

  useHunterCreditsLog();

  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
