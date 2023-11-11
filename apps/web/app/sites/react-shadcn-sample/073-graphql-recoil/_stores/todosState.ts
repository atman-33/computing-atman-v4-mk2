import { SampleTodo } from '@libs/web/data-access-graphql';
import { atom } from 'recoil';

// sotres folders : atom
// hooks folders  : selector and use method(custom hook)

// export const todosState = atom<SampleTodo[]>({
//   key: 'todosState',
//   default: selector<SampleTodo[]>({
//     key: 'todosState/defaultSelector',
//     get: async () => {
//       const res = await todoApi.getTodos();
//       return res.data.sampleTodos;
//     }
//   })
// });

export const todosState = atom<SampleTodo[]>({
  key: 'todosState',
  default: []
});
