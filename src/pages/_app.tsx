import type { AppProps } from 'next/app';
import '@scss/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
