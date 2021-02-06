import { Paths } from '@/data/paths';
import Link from 'next/link';
import React from 'react';
import { styled } from 'stitches.config';
import { Text } from '@/components/common/primitives/Text';
import { Box } from '@/components/common/Box/Box';

const siteLinks: { label: string; href: string }[] = [
  {
    label: 'home',
    href: `${Paths.home}`,
  },
  {
    label: 'writing',
    href: `/${Paths.writing}`,
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
    href: Paths.twitter,
  },
  {
    label: 'instagram',
    href: Paths.instagram,
  },
  {
    label: 'linkedin',
    href: Paths.linkedin,
  },
];

const StyledFooter = styled('footer', {
  pt: '$9',
  display: 'flex',
  jc: 'center',
  position: 'relative',
  zIndex: '$1',
});
const FooterContent = styled('div', {
  borderTop: '1px solid $surface1',
  width: '100%',
  maxWidth: '$site',
  mx: '$7',
});
const FooterLinksContainer = styled('div', {
  py: '$5',
  mb: '$6',
  display: 'flex',
  jc: 'space-between',
  bp1: { fd: 'column', spaceY: '$6' },
});
const List = styled('ul', {
  spaceY: '$2',
});
const FooterLink = styled('a', {
  display: 'block',
  ta: 'right',
  color: '$text1',
});

export const Footer: React.FC = () => {
  const [year, setYear] = React.useState<number | null>(null);

  React.useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);

  return (
    <StyledFooter>
      <FooterContent>
        <FooterLinksContainer>
          <Box>
            <Link href={Paths.email} passHref>
              <FooterLink
                css={{ display: 'inline-block', ta: 'left', fz: '$3' }}>
                jenningsebailey@gmail.com
              </FooterLink>
            </Link>
          </Box>
          <Box css={{ display: 'flex', spaceX: '$5' }}>
            <List>
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} passHref>
                    <FooterLink>{link.label}</FooterLink>
                  </Link>
                </li>
              ))}
            </List>
            <List>
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} passHref>
                    <FooterLink target='_blank' rel='noopener noreferrer'>
                      {link.label}
                    </FooterLink>
                  </Link>
                </li>
              ))}
            </List>
          </Box>
        </FooterLinksContainer>
        <Box css={{ display: 'flex', jc: 'space-between', pb: '$4' }}>
          <Text size='2'>&copy; {year} copyright</Text>
          <Link href={Paths.hunter} passHref>
            <FooterLink
              target='_blank'
              rel='noopener noreferrer'
              css={{ fontSize: '$2', lh: '$primary' }}>
              designed and developed <br />
              by hunter jennings
            </FooterLink>
          </Link>
        </Box>
      </FooterContent>
    </StyledFooter>
  );
};
