/* eslint-disable @nx/enforce-module-boundaries */
import authApi from '@/features/auth/api/auth-api';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useIsAuthenticated } from './useIsAuthenticated';
import { useRedirectPath } from './useRedirectPath';

const useAuth = () => {
  const router = useRouter();
  const { isAuthenticated, setIsAuthenticated } = useIsAuthenticated();
  const { setRedirectPath } = useRedirectPath();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await authApi.isAuthenticated();
        // console.log(response);
        if (response === true) {
          // console.log('authenticated');
          setIsAuthenticated(true);
        } else {
          // console.log('not authenticated');
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error checking authentication', error);
      }
    };

    checkAuthentication();
  }, [setIsAuthenticated, setRedirectPath]);

  const requireAuth = () => {
    // console.log('isAuthenticated', isAuthenticated);
    if (!isAuthenticated) {
      router.push('/login');
    }
  };

  return {
    isAuthenticated,
    requireAuth
  };
};

export default useAuth;
