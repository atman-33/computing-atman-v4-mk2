/* eslint-disable @nx/enforce-module-boundaries */
'use client';

import DotFlasing from '@/components/elements/DotFlashing';
import useAuth from '@/features/auth/hooks/useAuth';
import { useRedirectPath } from '@/features/auth/hooks/useRedirectPath';
import Bookmarks from '@/features/booker/components/Bookmarks';
import CreateBookmark from '@/features/booker/components/CreateBookmark';
import Navbar from '@/features/booker/components/layouts/Navbar';
import Sidebar from '@/features/booker/components/layouts/Sidebar';
import { useIsHeaderVisible } from '@/hooks/useIsHeaderVisible';
import { ReactNode, useEffect } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  const { setRedirectPath } = useRedirectPath();
  const { isAuthenticated, requireAuth } = useAuth();
  const { setIsHeaderVisible } = useIsHeaderVisible();

  useEffect(() => {
    setIsHeaderVisible(false);
    setRedirectPath('/sites/booker');
    requireAuth();
  }, [requireAuth]);

  if (!isAuthenticated) {
    return <DotFlasing />;
  }

  return (
    <>
      <Navbar />
      <div className="mt-2 grid grid-cols-12">
        <div className="col-span-3 mr-4 border-r-2">
          <Sidebar>
            <Bookmarks />
          </Sidebar>
        </div>
        <div className="col-span-9">{children}</div>
      </div>
      <CreateBookmark />
    </>
  );
};

export default Layout;
