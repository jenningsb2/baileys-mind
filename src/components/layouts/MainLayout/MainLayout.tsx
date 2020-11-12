import { DefaultSeo } from 'next-seo';
import Link from 'next/link';
import styles from './MainLayout.module.scss';
import SEO from 'next-seo.config';

export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <div className={styles.layout}>
        <nav>
          <Link href='/'>
            <a>Back to home</a>
          </Link>
        </nav>
        <div className={styles.content}>{children}</div>
        <footer>footer</footer>
      </div>
    </>
  );
};
