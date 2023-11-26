'use client';

import { ReactNode } from 'react';
import Navbar from './_comopnents/Navbar';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
