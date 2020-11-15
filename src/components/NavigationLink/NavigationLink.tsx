import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from './NavigationLink.module.scss';

type NavigationLinkState = 'active' | 'inactive';

export const NavigationLink: React.FC<{ href: string }> = ({
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

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      className={styles.link}
      href={href}
      onClick={handleClick}
      data-state={linkState}>
      {children}
    </a>
  );
};
