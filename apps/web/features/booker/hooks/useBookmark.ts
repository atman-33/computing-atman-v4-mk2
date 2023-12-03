import { useRecoilState, useResetRecoilState } from 'recoil';
import { bookmarkState } from '../stores/bookmarkState';

export const useBookmark = () => {
  const [bookmark, setBookmark] = useRecoilState(bookmarkState);

  /**
   * Reset bookmark
   */
  const resetBookmark = useResetRecoilState(bookmarkState);

  /**
   * Set bookmark id and name
   */
  const setBookmarkIdAndName = ({ id, name }: { id: string; name: string }) => {
    setBookmark({
      ...bookmark,
      _id: id,
      name
    });
  };

  return {
    bookmark,
    setBookmark,
    setBookmarkIdAndName,
    resetBookmark
  };
};
