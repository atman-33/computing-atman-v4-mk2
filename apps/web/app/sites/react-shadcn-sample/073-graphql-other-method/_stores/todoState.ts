import { SampleTodo } from '@libs/web/data-access-graphql';
import { atom, selector } from 'recoil';
import { getTodos } from '../api/todo';
import { AtomKeys, SelectorKeys } from './recoilKeys';

export const todosState = atom<SampleTodo[]>({
  key: AtomKeys.TODOS_STATE,
  default: selector<SampleTodo[]>({
    key: SelectorKeys.TODOS_DEFAULT_SELECTOR,
    get: async () => {
      const res = await getTodos();
      return res.data.sampleTodos;
    }
  })
});

export const todosSelector = selector<SampleTodo[]>({
  key: SelectorKeys.TODOS_SELECTOR,
  get: ({ get }) => {
    const todos = get(todosState);
    return todos;
  },
  set: ({ set }, newValue) => {
    set(todosState, newValue);
  }
});
