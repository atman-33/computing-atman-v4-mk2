import { atomFamily } from 'recoil';
import { Link } from '../types';

type BookmarkId = string;

export const linksState = atomFamily<Link[], BookmarkId>({
  key: 'booker/linksState',
  default: []
});
