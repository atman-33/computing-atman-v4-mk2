/* eslint-disable @nx/enforce-module-boundaries */
'use client';

import DotFlasing from '@/components/elements/DotFlashing';
import authApi from '@/features/auth/api/auth';
import { useRedirectPath } from '@/features/auth/hooks/useRedirectPath';
import AddBookmark from '@/features/booker/components/AddBookmark';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { redirectPath, setRedirectPath } = useRedirectPath();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await authApi.isAuthenticated();
        // console.log(response);
        if (response === true) {
          console.log('authenticated');
        } else {
          console.log('not authenticated');
          setRedirectPath('/sites/booker');
          // console.log('redirectPath: ', redirectPath);
          router.push('/login');
        }
      } catch (error) {
        console.error('Error checking authentication', error);
      } finally {
        setLoading(false);
      }
    };
    setTimeout(() => {
      checkAuthentication();
    }, 1000);
  }, []);

  if (loading) {
    return <DotFlasing />;
  }

  return (
    <div>
      booker page...
      <AddBookmark />
    </div>
  );
};

export default Page;
