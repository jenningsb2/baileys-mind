import { Paths } from '@data/paths';
import { NavigationLink } from '@/components/NavigationLink/NavigationLink';
import styles from './Navigation.module.scss';
import { AnimateSharedLayout } from 'framer-motion';

export const Navigation: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.content}>
        <AnimateSharedLayout>
          <NavigationLink href={Paths.home}>Home</NavigationLink>
          <NavigationLink href={Paths.notes}>Notes</NavigationLink>
          <NavigationLink href={Paths.about}>About</NavigationLink>
        </AnimateSharedLayout>
      </div>
    </nav>
  );
};
