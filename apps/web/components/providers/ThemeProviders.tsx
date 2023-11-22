'use client';

import { ThemeProvider } from 'next-themes';

interface Props {
  children: React.ReactNode;
  defaultTheme?: string;
}

export function ThemeProviders({ children, defaultTheme }: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme={defaultTheme} enableSystem>
      {children}
    </ThemeProvider>
  );
}
