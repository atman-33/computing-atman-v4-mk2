import { atom } from 'recoil';

export const redirectPathState = atom<string>({
  key: 'auth/redirectPathState',
  default: ''
});
