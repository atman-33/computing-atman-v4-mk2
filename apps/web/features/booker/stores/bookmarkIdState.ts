import { atom } from 'recoil';

export const bookmarkIdState = atom<{ id: string }>({
  key: 'booker/bookmarkIdState',
  default: {
    id: ''
  }
});
