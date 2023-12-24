import { atom } from 'recoil';
import { Link } from '../types';

export const editingLinkState = atom<Link | undefined>({
  key: 'booker/editingLinkState',
  default: undefined
});
