import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="mt-8">{children}</div>;
};

export default Layout;
