/* eslint-disable @nx/enforce-module-boundaries */
'use client';

import DotFlasing from '@/components/elements/DotFlashing';
/* eslint-disable @nx/enforce-module-boundaries */
import authApi from '@/features/auth/api/auth';
import { useRedirectPath } from '@/features/auth/hooks/useRedirectPath';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { redirectPath, setRedirectPath } = useRedirectPath();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const data = await authApi.isAuthenticated();
        // console.log(data);
        if (data === true) {
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

    checkAuthentication();
  }, []);

  if (loading) {
    return <DotFlasing />;
  }

  return <div>{redirectPath}</div>;
};

export default Page;
