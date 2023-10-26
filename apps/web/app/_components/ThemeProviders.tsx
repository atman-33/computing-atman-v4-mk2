/* eslint-disable @nx/enforce-module-boundaries */
'use client';

import siteMetadata from '@/constants/site-metadata';
import { ThemeProvider } from 'next-themes';

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme} enableSystem>
      {children}
    </ThemeProvider>
  );
}
