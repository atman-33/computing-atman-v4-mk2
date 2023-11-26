'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';

interface Props {
  children: React.ReactNode;
  defaultTheme?: string;
}

const ThemeProvider = ({ children, defaultTheme }: Props) => {
  return (
    <NextThemeProvider attribute="class" defaultTheme={defaultTheme} enableSystem>
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;
