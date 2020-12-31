import { Paths } from '@data/paths';
import { NavigationLink } from '@/components/NavigationLink/NavigationLink';
import styles from './Navigation.module.scss';
import { AnimateSharedLayout } from 'framer-motion';
import { ThemeButton } from '../ThemeButton/ThemeButton';

export const Navigation: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.content}>
        <div>
          <AnimateSharedLayout>
            <div className={styles.links}>
              <NavigationLink href={Paths.home}>home</NavigationLink>
              <NavigationLink href={`/${Paths.writings}`}>
                writing
              </NavigationLink>
              <NavigationLink href={`${Paths.home}`}>reading</NavigationLink>
              <NavigationLink href={`/${Paths.about}`}>about</NavigationLink>
            </div>
          </AnimateSharedLayout>
        </div>
        <div>
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
};
