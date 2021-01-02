import { Paths } from '@/data/paths';
import Link from 'next/link';
import React from 'react';
import { styled } from 'stitches.config';
import { Text } from '@/components/elements/Text';

const Box = styled('div', {});
const StyledFooter = styled('footer', {
  pt: '$9',
  display: 'flex',
  jc: 'center',
});
const FooterContent = styled('div', {
  borderTop: '1px solid $surface1',
  width: '100%',
  maxWidth: '$site',
  mx: '$7',
});
const List = styled('ul', {
  spaceY: '$2',
});
const LinkStyled = styled('a', {
  display: 'block',
  ta: 'right',
  color: '$text1',
});

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
    <StyledFooter>
      <FooterContent>
        <Box
          css={{
            py: '$5',
            mb: '$6',
            display: 'flex',
            jc: 'space-between',
            bp1: { fd: 'column', spaceY: '$6' },
          }}>
          <Box>
            <Link href={Paths.email} passHref>
              <LinkStyled
                css={{ display: 'inline-block', ta: 'left', fz: '$3' }}>
                jenningsebailey@gmail.com
              </LinkStyled>
            </Link>
          </Box>
          <Box css={{ display: 'flex', spaceX: '$5' }}>
            <List>
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} passHref>
                    <LinkStyled>{link.label}</LinkStyled>
                  </Link>
                </li>
              ))}
            </List>
            <List>
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} passHref>
                    <LinkStyled target='_blank' rel='noopener noreferrer'>
                      {link.label}
                    </LinkStyled>
                  </Link>
                </li>
              ))}
            </List>
          </Box>
        </Box>
        <Box css={{ display: 'flex', jc: 'space-between', pb: '$4' }}>
          <Text size='2'>&copy; {year} copyright</Text>
          <Link href={Paths.hunter} passHref>
            <LinkStyled
              target='_blank'
              rel='noopener noreferrer'
              css={{ fontSize: '$2', lh: '$primary' }}>
              designed and developed <br />
              by hunter jennings
            </LinkStyled>
          </Link>
        </Box>
      </FooterContent>
    </StyledFooter>
  );
};
