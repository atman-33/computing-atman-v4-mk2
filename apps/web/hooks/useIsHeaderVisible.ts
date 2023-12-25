import { isHeaderVisibleState } from '@/stores/isHeaderVisibleState';
import { useRecoilState } from 'recoil';

export const useIsHeaderVisible = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useRecoilState(isHeaderVisibleState);

  return {
    isHeaderVisible,
    setIsHeaderVisible
  };
};
