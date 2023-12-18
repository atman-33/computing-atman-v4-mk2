/* eslint-disable @nx/enforce-module-boundaries */
'use client';

import DotFlasing from '@/components/elements/DotFlashing';
import useAuth from '@/features/auth/hooks/useAuth';
import { useRedirectPath } from '@/features/auth/hooks/useRedirectPath';
import Bookmark from '@/features/booker/components/Bookmark';
import Bookmarks from '@/features/booker/components/Bookmarks';
import CreateBookmark from '@/features/booker/components/CreateBookmark';
import { useEffect } from 'react';

const Page = () => {
  const { setRedirectPath } = useRedirectPath();
  const { isAuthenticated, requireAuth } = useAuth();

  useEffect(() => {
    setRedirectPath('/sites/booker');
    requireAuth();
  }, [requireAuth]);

  if (!isAuthenticated) {
    return <DotFlasing />;
  }

  return (
    <>
      <div className="mt-4 grid grid-cols-12">
        <div className="col-span-3 mr-4">
          <Bookmarks />
        </div>
        <div className="col-span-9">
          <Bookmark />
        </div>
      </div>
      <CreateBookmark />
    </>
  );
};

export default Page;
