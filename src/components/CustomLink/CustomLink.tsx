import Link from 'next/link';
import { styled } from 'stitches.config';

type CustomLinkProps = {
  as: string;
  href: string;
};

function isExternalLink(href: string): boolean {
  const regex = /^https?:\/\//;
  return regex.test(href);
}

const InternalLink = styled('a', {
  color: '$action',
  textDecoration: 'none',
});

const ExternalLink = styled('a', {
  color: '$action',
  textDecoration: 'none',
});

export const CustomLink: React.FC<CustomLinkProps> = ({
  as,
  href,
  children,
  ...otherProps
}) => {
  return (
    <Link as={as} href={href} passHref>
      {isExternalLink(href) ? (
        <ExternalLink {...otherProps}>{children}</ExternalLink>
      ) : (
        <InternalLink {...otherProps}>
          {'[['}
          {children}
          {']]'}
        </InternalLink>
      )}
    </Link>
  );
};
