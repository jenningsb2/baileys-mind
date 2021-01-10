import { useTheme } from '@/context/theme';
import { SvgContainer } from '@/components/SvgContainer/SvgContainer';
import { ReactComponent as MoonIcon } from '@/assets/moon.svg';
import { ReactComponent as SunIcon } from '@/assets/sun.svg';
import { styled } from 'stitches.config';
import { defaultTransition } from '@/styles/animation';

const StyledButton = styled('button', {
  height: '45px',
  width: '45px',
  display: 'flex',
  jc: 'center',
  ai: 'center',
  bc: '$surface3',
  br: '$1',
  transition: defaultTransition,
  ':focus': {
    outlineColor: '$action',
    outlineWidth: '1px',
    outlineStyle: 'auto',
  },
});

const Icon = styled('div', {
  width: '24px',
  path: {
    fill: '$surface1',
  },
});

export const ThemeButton: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const handleClick = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };
  return (
    <StyledButton onClick={handleClick}>
      <Icon>
        <SvgContainer svgHeight={24} svgWidth={24}>
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </SvgContainer>
      </Icon>
    </StyledButton>
  );
};
