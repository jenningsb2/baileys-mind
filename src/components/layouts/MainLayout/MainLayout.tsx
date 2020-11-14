import { DefaultSeo } from 'next-seo';
import styles from './MainLayout.module.scss';
import SEO from 'next-seo.config';
import { Navigation } from '@/components/Navigation/Navigation';

export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <div className={styles.layout}>
        <div className={styles.navigationWrapper}>
          <Navigation />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.content}>{children}</div>
        </div>
        <footer>footer</footer>
      </div>
    </>
  );
};
