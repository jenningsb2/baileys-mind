import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useState, useEffect, MouseEvent } from 'react';
import { styled } from 'stitches.config';
import { Text } from '@/components/primitives/Text';

const StyledLink = styled('a', {
  color: '$text1',
  position: 'relative',
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
    <StyledLink href={href} onClick={handleClick}>
      <Text>{children}</Text>
      {linkState === 'active' ? <LinkLine layoutId='link-bg' /> : null}
    </StyledLink>
  );
};
