import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useState, useEffect, MouseEvent } from 'react';
import styles from './NavigationLink.module.scss';

type NavigationLinkState = 'active' | 'inactive';
interface NavigationLinkProps {
  href: string;
}
export const NavigationLink: React.FC<NavigationLinkProps> = ({
  children,
  href,
}) => {
  const [linkState, setLinkState] = useState<NavigationLinkState>('inactive');
  const router = useRouter();

  useEffect(() => {
    router.pathname === href
      ? setLinkState('active')
      : setLinkState('inactive');
  }, [router]);

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      className={styles.link}
      href={href}
      onClick={handleClick}
      data-state={linkState}>
      <span className={styles.linkText}>{children}</span>
      {linkState === 'active' ? (
        <motion.div className={styles.linkBg} layoutId='link-bg' />
      ) : null}
    </a>
  );
};
