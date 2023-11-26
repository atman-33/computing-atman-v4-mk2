'use client';

import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

const StatesProvider = ({ children }: { children: ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default StatesProvider;
