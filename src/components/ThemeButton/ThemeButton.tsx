import { useTheme } from '@/context/theme';
import classnames from 'classnames';
import { SvgContainer } from '../SvgContainer/SvgContainer';
import styles from './ThemeButton.module.scss';
import { ReactComponent as MoonIcon } from '@/assets/moon.svg';
import { ReactComponent as SunIcon } from '@/assets/sun.svg';

export const ThemeButton: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const handleClick = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };
  return (
    <button
      className={classnames('button-reset', styles.btn)}
      onClick={handleClick}>
      <div className={styles.icon}>
        <SvgContainer svgHeight={24} svgWidth={24}>
          {/* TODO: Use AnimatePresence here */}
          {theme === 'light' ? (
            <MoonIcon key='light' />
          ) : (
            <SunIcon key='dark' />
          )}
        </SvgContainer>
      </div>
    </button>
  );
};
