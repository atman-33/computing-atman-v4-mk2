import { atom } from 'recoil';
import { Bookmark } from '../types';

export const bookmarkState = atom<Bookmark | null>({
  key: 'booker/bookmarkState',
  default: null
});
