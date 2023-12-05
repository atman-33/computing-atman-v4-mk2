/* eslint-disable @nx/enforce-module-boundaries */
'use client';

import DotFlasing from '@/components/elements/DotFlashing';
import authApi from '@/features/auth/api/auth-api';
import { useRedirectPath } from '@/features/auth/hooks/useRedirectPath';
import Bookmark from '@/features/booker/components/Bookmark';
import Bookmarks from '@/features/booker/components/Bookmarks';
import CreateBookmark from '@/features/booker/components/CreateBookmark';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Page = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { redirectPath, setRedirectPath } = useRedirectPath();

  const checkAuthentication = async () => {
    try {
      const response = await authApi.isAuthenticated();
      // console.log(response);
      if (response === true) {
        console.log('authenticated');
        setIsLoggedIn(true);
      } else {
        console.log('not authenticated');
        setRedirectPath('/sites/booker');
        // console.log('redirectPath: ', redirectPath);
        router.push('/login');
      }
    } catch (error) {
      console.error('Error checking authentication', error);
    }
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  if (!isLoggedIn) {
    return <DotFlasing />;
  }

  return (
    <>
      <div className="mt-4 grid grid-cols-12">
        <div className="col-span-3">
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
