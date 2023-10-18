import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

const ThemeContext = createContext(
  [] as unknown as [string | undefined, Dispatch<SetStateAction<string>>]
);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('gray');

  return <ThemeContext.Provider value={[theme, setTheme]}>{children}</ThemeContext.Provider>;
};

const useTheme = () => useContext(ThemeContext);

export { ThemeContext, ThemeProvider, useTheme };
