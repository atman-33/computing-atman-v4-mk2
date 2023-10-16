import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

const ThemeContext = createContext([] as unknown as string | undefined);

const ThemeUpdateContext = createContext([] as unknown as Dispatch<SetStateAction<string>>);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('gray');

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={setTheme}>{children}</ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);
const useUpdateTheme = () => useContext(ThemeUpdateContext);

export { ThemeContext, ThemeProvider, useTheme, useUpdateTheme };
