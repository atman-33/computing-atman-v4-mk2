import { atom } from 'recoil';
import { Bookmark } from '../types';

export const comboBoxSelectedBookmarkState = atom<Bookmark | null>({
  key: 'booker/comboBoxSelectedBookmarkState',
  default: null
});
