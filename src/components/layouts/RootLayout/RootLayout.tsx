import { DefaultSeo } from 'next-seo';
import styles from './RootLayout.module.scss';
import SEO from 'next-seo.config';
import { Navigation } from '@/components/Navigation/Navigation';
import { ThemeProvider } from '@/context/theme';
import { Footer } from '@/components/Footer/Footer';

export const RootLayout: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <DefaultSeo {...SEO} />
      <div className={styles.layout}>
        <div className={styles.navigationWrapper}>
          <Navigation />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.content}>{children}</div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
