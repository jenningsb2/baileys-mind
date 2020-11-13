import { DefaultSeo } from 'next-seo';
import styles from './MainLayout.module.scss';
import SEO from 'next-seo.config';
import { Navigation } from '@/components/Navigation/Navigation';

export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <div className={styles.layout}>
        <Navigation />
        <div className={styles.content}>{children}</div>
        <footer>footer</footer>
      </div>
    </>
  );
};
