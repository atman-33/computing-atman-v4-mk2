import { useRecoilState } from 'recoil';
import { comboBoxSelectedBookmarkState } from '../stores/comboBoxSelectedBookmark';

export const useComboBoxSelectedBookmark = () => {
  const [comboBoxSelectedBookmark, setComboBoxSelectedBookmark] = useRecoilState(
    comboBoxSelectedBookmarkState
  );

  return {
    comboBoxSelectedBookmark,
    setComboBoxSelectedBookmark
  };
};
