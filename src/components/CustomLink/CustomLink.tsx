import Link from 'next/link';
import styles from './CustomLink.module.scss';

type CustomLinkProps = {
  as: string;
  href: string;
};

export const CustomLink: React.FC<CustomLinkProps> = ({
  as,
  href,
  ...otherProps
}) => {
  return (
    <Link as={as} href={href}>
      <a {...otherProps} className={styles.link} />
    </Link>
  );
};
