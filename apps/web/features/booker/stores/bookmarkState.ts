import { atom } from 'recoil';

export type BookmarkType = {
  id: string;
  name: string;
};

export const bookmarkState = atom<BookmarkType | null>({
  key: 'booker/bookmarkState',
  default: null
});
