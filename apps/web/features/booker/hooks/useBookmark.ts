import { useRecoilState, useResetRecoilState } from 'recoil';
import { bookmarkState } from '../stores/bookmarkState';

export const useBookmark = () => {
  const [bookmark, setBookmark] = useRecoilState(bookmarkState);

  /**
   * Reset bookmark
   */
  const resetBookmark = useResetRecoilState(bookmarkState);

  return {
    bookmark,
    setBookmark,
    resetBookmark
  };
};
