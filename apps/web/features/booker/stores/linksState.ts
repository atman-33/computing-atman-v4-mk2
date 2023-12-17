import { Link } from '@libs/web/data-access-graphql';
import { atomFamily } from 'recoil';

type BookmarkId = string;

export const linksState = atomFamily<Link[], BookmarkId>({
  key: 'booker/linksState',
  default: []
});
