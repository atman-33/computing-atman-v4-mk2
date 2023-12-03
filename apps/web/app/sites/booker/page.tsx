/* eslint-disable @nx/enforce-module-boundaries */
'use client';

import DotFlasing from '@/components/elements/DotFlashing';
import authApi from '@/features/auth/api/auth-api';
import { useRedirectPath } from '@/features/auth/hooks/useRedirectPath';
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
      <div>
        <div className="mt-4">
          <Bookmarks />
        </div>
        <CreateBookmark />
      </div>
    </>
  );
};

export default Page;
