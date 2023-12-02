/* eslint-disable @nx/enforce-module-boundaries */
'use client';

import Navbar from '@/features/booker/components/layouts/Navbar';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
