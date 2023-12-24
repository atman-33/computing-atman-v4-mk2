import { atom } from 'recoil';
import { Bookmark } from '../types';

export const bookmarkState = atom<Bookmark | undefined>({
  key: 'booker/bookmarkState',
  default: undefined
});
