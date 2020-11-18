import { useTheme } from '@/context/theme';
import styles from './Toggle.module.scss';

export const ToggleSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const handleClick = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };
  return (
    <div>
      <button onClick={handleClick}>Theme is {theme}</button>
    </div>
  );
};
