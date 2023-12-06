import { useRecoilState } from 'recoil';
import { lastLinksState } from '../stores/lastLinksState';

export const useLastLinks = () => {
  const [lastLinks, setLastLinks] = useRecoilState(lastLinksState);

  return {
    lastLinks,
    setLastLinks
  };
};
