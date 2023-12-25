import { atom } from 'recoil';

/**
 * Is header visible
 */
export const isHeaderVisibleState = atom<boolean>({
  key: 'isHeaderVisibleState',
  default: true
});
