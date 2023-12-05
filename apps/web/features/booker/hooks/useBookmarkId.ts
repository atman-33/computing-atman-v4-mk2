import { useRecoilState, useResetRecoilState } from 'recoil';
import { bookmarkIdState } from '../stores/bookmarkIdState';

export const useBookmarkId = () => {
  const [bookmarkId, setBookmarkId] = useRecoilState(bookmarkIdState);

  /**
   * Reset bookmark id
   */
  const resetBookmarkId = useResetRecoilState(bookmarkIdState);

  return {
    bookmarkId,
    setBookmarkId,
    resetBookmarkId
  };
};
