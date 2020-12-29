import Link from 'next/link';
import styles from './CustomLink.module.scss';

type CustomLinkProps = {
  as: string;
  href: string;
};

function isExternalLink(href: string): boolean {
  const regex = /^https?:\/\//;
  return regex.test(href);
}

export const CustomLink: React.FC<CustomLinkProps> = ({
  as,
  href,
  children,
  ...otherProps
}) => {
  return (
    <Link as={as} href={href}>
      {isExternalLink(href) ? (
        <a {...otherProps} className={styles.link}>
          {children}
        </a>
      ) : (
        <a {...otherProps} className={styles.link}>
          {'[['}
          {children}
          {']]'}
        </a>
      )}
    </Link>
  );
};
