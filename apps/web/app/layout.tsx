import GoogleAnalytics from '../components/google-analytics';
import '../styles/global.css';

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <GoogleAnalytics />
      {children}
    </>
  );
}
