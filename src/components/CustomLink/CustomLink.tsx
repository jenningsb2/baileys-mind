import Link from 'next/link';
import { styled } from 'stitches.config';
import { textElementReset } from '../elements/shared';

type CustomLinkProps = {
  as: string;
  href: string;
  css?: any;
};

function isExternalLink(href: string): boolean {
  const regex = /^https?:\/\//;
  return regex.test(href);
}

const StyledLink = styled('a', {
  ...textElementReset,
  color: '$action',
  fz: '$3',
  textDecoration: 'none',
});

const InternalLink = styled(StyledLink, {});

const ExternalLink = styled(StyledLink, {});

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
