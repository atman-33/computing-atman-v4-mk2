import { Link } from '@libs/web/data-access-graphql';
import { atom } from 'recoil';

export const lastLinksState = atom<Link[]>({
  key: 'booker/linksState',
  default: []
});
