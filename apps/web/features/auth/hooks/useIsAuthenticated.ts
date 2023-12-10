import { useRecoilState } from 'recoil';
import { isAuthenticatedState } from '../stores/isAuthenticatedState';

export const useIsAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated] = useRecoilState(isAuthenticatedState);

  return {
    isAuthenticated,
    setIsAuthenticated
  };
};
