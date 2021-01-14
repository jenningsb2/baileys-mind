import classnames from 'classnames';
import React, { SetStateAction, MutableRefObject } from 'react';
import { darkThemeClass, styled } from '../../stitches.config';

export type AppThemes = 'dark' | 'light';
type UpdateAppTheme = React.Dispatch<SetStateAction<AppThemes>>;

type ThemeContextType = {
  theme: AppThemes;
  setTheme: UpdateAppTheme;
};

const ThemeContext = React.createContext({} as ThemeContextType);

const Box = styled('div', {
  backgroundColor: '$uiBackground',
});

const ThemeProvider: React.FC = ({ children }) => {
  const root = React.useRef() as MutableRefObject<HTMLDivElement>;
  const [theme, setTheme] = React.useState<AppThemes>('light');
  React.useEffect(() => {
    root.current.dataset.theme = theme;
  }, [theme]);

  const value = React.useMemo(
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
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export { ThemeProvider, useTheme };
