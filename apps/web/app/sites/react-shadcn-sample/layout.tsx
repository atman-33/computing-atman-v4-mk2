/* eslint-disable @nx/enforce-module-boundaries */

import Icon from '@/components/icons';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-8">
      <div className="inline-flex space-x-1">
        <Icon kind="home" href="/sites/react-shadcn-sample" target="" size={6} />
        <span>Shadcn Sample Top</span>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
