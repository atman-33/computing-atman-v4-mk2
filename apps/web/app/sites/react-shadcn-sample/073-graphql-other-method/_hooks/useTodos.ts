import { useRecoilState } from 'recoil';
import { todosState } from '../_stores/todosState';

// sotres folders : atom
// hooks folders  : selector and use method(custom hook)

// ---- selector sample ---- //
// export const todosSelector = selector<SampleTodo[]>({
//   key: 'todosState/todosSelector',
//   get: ({ get }) => {
//     const todos = get(todosState);
//     return todos;
//   },
//   set: ({ set }, newValue) => {
//     set(todosState, newValue);
//   }
// });

export const useTodos = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  return {
    todos,
    setTodos
  };
};
