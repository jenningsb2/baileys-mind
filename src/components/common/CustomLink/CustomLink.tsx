import { ReactComponent as ExternalLinkIcon } from '@/assets/external-link.svg';
import { Text } from '@/components/common/primitives/Text';
import Link from 'next/link';
import { styled } from 'stitches.config';
import { textElementReset } from '../primitives/shared';

function isExternalLink(href: string): boolean {
  const externalLinkRegex = /^https?:\/\//;
  const mailToRegex = /^mailto\:/;
  return externalLinkRegex.test(href) || mailToRegex.test(href);
}

const StyledLink = styled('a', {
  ...textElementReset,
  color: '$action',
  fz: '$3',
  textDecoration: 'none',
});

const LinkIcon = styled('span', {
  width: 14,
  display: 'block',
  path: {
    fill: '$action',
  },
});

const InternalLink = styled(StyledLink, {});

const ExternalLink = styled(StyledLink, {
  display: 'inline-grid',
  gridTemplateColumns: 'auto min-content',
  cg: '$1',
});

interface CustomLinkProps {
  as: string;
  href: string;
  css?: any;
}
export const CustomLink: React.FC<CustomLinkProps> = ({
  as,
  href,
  children,
  ...otherProps
}) => {
  return (
    <Link as={as} href={href} passHref>
      {isExternalLink(href) ? (
        <ExternalLink {...otherProps}>
          <Text color='action' css={{ fontSize: 'inherit' }}>
            {children}
          </Text>
          <LinkIcon>
            <ExternalLinkIcon width='14px' height='14px' />
          </LinkIcon>
        </ExternalLink>
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
