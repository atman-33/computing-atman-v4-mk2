import {
  CreateSampleTodoInput,
  DeleteSampleTodoInput,
  SampleTodo
} from '@libs/web/data-access-graphql';
import { useRecoilState } from 'recoil';
import { todosState } from '../_stores/todosState';
import todoApi from '../api/todo';

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

  const initTodos = () => {
    todoApi.getTodos().then((todos) => {
      setTodos(todos.data.sampleTodos);
    });
  };

  const addTodo = (newTodo: CreateSampleTodoInput) => {
    todoApi.createTodo(newTodo).then((newTodo) => {
      setTodos((todos) => [...todos, newTodo.data?.createSampleTodo as SampleTodo]);
    });
  };

  const deleteTodo = (todoToDelete: DeleteSampleTodoInput) => {
    todoApi.deleteTodo(todoToDelete).then(() => {
      setTodos((todos) => {
        return todos.filter((todo) => {
          return todo._id !== todoToDelete._id;
        });
      });
    });
  };

  return {
    todos,
    setTodos,
    initTodos,
    addTodo,
    deleteTodo
  };
};
