import classnames from 'classnames';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useRef,
  useState,
  MutableRefObject,
  useContext,
  useEffect,
} from 'react';
import { darkThemeClass, styled } from '../../stitches.config';

export type AppThemes = 'dark' | 'light';
type UpdateAppTheme = Dispatch<SetStateAction<AppThemes>>;

type ThemeContextType = {
  theme: AppThemes;
  setTheme: UpdateAppTheme;
};

const ThemeContext = createContext({} as ThemeContextType);

const Box = styled('div', {
  backgroundColor: '$uiBackground',
});

const ThemeProvider: React.FC = ({ children }) => {
  const root = useRef() as MutableRefObject<HTMLDivElement>;
  const [theme, setTheme] = useState<AppThemes>('light');
  useEffect(() => {
    root.current.dataset.theme = theme;
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>
      <Box
        className={classnames({
          [`${darkThemeClass}`]: theme === 'dark',
        })}
        ref={root}>
        {children}
      </Box>
    </ThemeContext.Provider>
  );
};

function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export { ThemeProvider, useTheme };
