import { atom } from 'recoil';

/**
 * When edit link modal is shown, this atom is true
 */
export const editLinkShowState = atom<boolean>({
  key: 'booker/editLinkShowState',
  default: false
});
