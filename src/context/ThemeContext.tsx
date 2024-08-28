import * as React from 'react';
import { ITheme, ThemeContextType } from '../@types/theme';

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

const DEFAULT_THEME = {
  buttonBackgroundColor: '#1a1a1a',
  buttonTextColor: '#1976d2',
  buttonVariant: 'outlined',
  backgroundColor: '#242424',
  buttonBorderColor: '#646cff',
}

const ThemeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [themeMode, setThemeMode] = React.useState<ITheme>(DEFAULT_THEME);
  return (
    <ThemeContext.Provider value={{ theme: themeMode, changeTheme: setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;