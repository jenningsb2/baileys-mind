import { Paths } from '@/data/paths';
import classnames from 'classnames';
import Link from 'next/link';
import React from 'react';
import styles from './Footer.module.scss';

export const Footer: React.FC = ({ children }) => {
  const [year, setYear] = React.useState<number | null>(null);

  React.useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);

  const siteLinks: { label: string; href: string }[] = [
    {
      label: 'home',
      href: `${Paths.home}`,
    },
    {
      label: 'writing',
      href: `/${Paths.writings}`,
    },
    {
      label: 'reading',
      href: `/${Paths.reading}`,
    },
    {
      label: 'about',
      href: `/${Paths.about}`,
    },
  ];
  const socialLinks: { label: string; href: string }[] = [
    {
      label: 'twitter',
      href: 'https://twitter.com/Bailey_Jennings',
    },
    {
      label: 'instagram',
      href: 'https://www.instagram.com/b_jennings/',
    },
    {
      label: 'linkedin',
      href: 'https://www.linkedin.com/in/baileyjennings/',
    },
  ];

  return (
    <footer className={classnames('p-t-super', styles.container)}>
      <div className={classnames('p-y-md', styles.content)}>
        <div className={classnames('p-b-md m-b-lg', styles.links)}>
          <Link href={Paths.email}>
            <a className={classnames('fz-sm', styles.email)}>
              jenningsebailey@gmail.com
            </a>
          </Link>
          <div className={classnames('space-x-md', styles.linkLists)}>
            <ul className='space-y-xsm'>
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className={styles.listLink}>{link.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className='space-y-xsm'>
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      className={styles.listLink}>
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={classnames(styles.legal)}>
          <div className='fz-xsm lh-tight'>&copy; {year} copyright</div>
          <Link href={Paths.hunter}>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='link-reset fz-xsm lh-primary'>
              designed and developed <br />
              by hunter jennings
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};
