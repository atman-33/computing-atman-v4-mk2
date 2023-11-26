import { useRecoilState } from 'recoil';
import { redirectPathState } from '../stores/redirectPathState';

export const useRedirectPath = () => {
  const [redirectPath, setRedirectPath] = useRecoilState(redirectPathState);

  return {
    redirectPath,
    setRedirectPath
  };
};
