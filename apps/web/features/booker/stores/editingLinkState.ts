import { atom } from 'recoil';
import { Link } from '../types';

export const editingLinkState = atom<Link | null>({
  key: 'booker/editingLinkState',
  default: null
});
