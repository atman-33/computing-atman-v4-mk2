import { SampleTodo } from '@libs/web/data-access-graphql';
import { atom } from 'recoil';

export const todosState = atom<SampleTodo[]>({
  key: 'todosState',
  default: []
});
