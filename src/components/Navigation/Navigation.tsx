import { Paths } from '@data/paths';
import { NavigationLink } from '@/components/NavigationLink/NavigationLink';
import { AnimateSharedLayout } from 'framer-motion';
import { ThemeButton } from '../ThemeButton/ThemeButton';
import { styled } from 'stitches.config';

const StyledNavigation = styled('nav', {
  py: '$5',
  px: '$7',
  width: '$full',
  bc: '$surface2',
  backdropFilter: 'blur(4px)',
  display: 'flex',
  jc: 'center',
  position: 'fixed',
});

const NavigationContent = styled('div', {
  width: '$full',
  maxWidth: '$site',
  display: 'flex',
  jc: 'flex-end',
  spaceX: '$3',
});

const NavigationLinks = styled('div', {
  bc: '$surface3',
  height: '45px',
  display: 'flex',
  ai: 'center',
  px: '$5',
  br: '$1',
  spaceX: '$3',
});

export const Navigation: React.FC = () => {
  return (
    <StyledNavigation>
      <NavigationContent>
        <div>
          <AnimateSharedLayout>
            <NavigationLinks>
              <NavigationLink href={Paths.home}>home</NavigationLink>
              <NavigationLink href={`/${Paths.writings}`}>
                writing
              </NavigationLink>
              <NavigationLink href={`${Paths.reading}`}>reading</NavigationLink>
              <NavigationLink href={`/${Paths.about}`}>about</NavigationLink>
            </NavigationLinks>
          </AnimateSharedLayout>
        </div>
        <div>
          <ThemeButton />
        </div>
      </NavigationContent>
    </StyledNavigation>
  );
};
