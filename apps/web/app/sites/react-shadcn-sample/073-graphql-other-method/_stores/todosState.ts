import { SampleTodo } from '@libs/web/data-access-graphql';
import { atom, selector } from 'recoil';
import { AtomKeys, SelectorKeys } from '../_constants/recoil-keys';
import todoApi from '../api/todo';

// sotres folders : atom
// hooks folders  : selector and use method(custom hook)

export const todosState = atom<SampleTodo[]>({
  key: AtomKeys.TODOS_STATE,
  default: selector<SampleTodo[]>({
    key: SelectorKeys.TODOS_DEFAULT_SELECTOR,
    get: async () => {
      const res = await todoApi.getTodos();
      return res.data.sampleTodos;
    }
  })
});
