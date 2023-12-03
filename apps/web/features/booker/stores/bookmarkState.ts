import { Bookmark } from '@libs/web/data-access-graphql';
import { atom } from 'recoil';

export const bookmarkState = atom<Bookmark>({
  key: 'auth/bookmark',
  default: {
    _id: '',
    name: '',
    userId: '',
    links: []
  }
});
