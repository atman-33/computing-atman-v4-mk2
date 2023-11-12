import { atom } from 'recoil';

export const countState = atom<number>({
  key: 'count',
  default: 0
});
