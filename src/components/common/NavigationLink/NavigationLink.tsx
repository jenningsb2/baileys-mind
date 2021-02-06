import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import React, { MouseEvent } from 'react';
import { styled } from 'stitches.config';
import { Text } from '@/components/common/primitives/Text';

const StyledLink = styled('a', {
  color: '$text1',
  position: 'relative',
  bp1: {
    fz: '$3',
  },
});

const LinkLine = styled(motion.div, {
  bc: '$action',
  height: 2,
  width: '$full',
  br: '$pill',
  position: 'absolute',
  bottom: -12,
  left: 0,
});

type NavigationLinkState = 'active' | 'inactive';
interface NavigationLinkProps {
  href: string;
}
export const NavigationLink: React.FC<NavigationLinkProps> = ({
  children,
  href,
}) => {
  const [linkState, setLinkState] = React.useState<NavigationLinkState>(
    'inactive',
  );
  const router = useRouter();

  React.useEffect(() => {
    router.pathname === href
      ? setLinkState('active')
      : setLinkState('inactive');
  }, [router]);

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <StyledLink href={href} onClick={handleClick}>
      <Text css={{ fz: 'inherit' }}>{children}</Text>
      {linkState === 'active' ? <LinkLine layoutId='link-bg' /> : null}
    </StyledLink>
  );
};
