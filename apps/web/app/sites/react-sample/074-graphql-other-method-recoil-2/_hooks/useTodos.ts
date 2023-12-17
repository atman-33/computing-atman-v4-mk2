import {
  SampleTodo,
  SampleTodoCreateInput,
  SampleTodoUpdateInput
} from '@libs/web/data-access-graphql';
import { useRecoilCallback, useRecoilState } from 'recoil';
import { todosState } from '../_stores/todosState';
import todoApi from '../api/todo';

export const useTodos = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  const initTodos = useRecoilCallback(({ set }) => () => {
    todoApi.getTodos().then((todos) => {
      set(todosState, todos.data.sampleTodos);
    });
  });

  const addTodo = useRecoilCallback(({ set }) => (newTodo: SampleTodoCreateInput) => {
    const { id, ...rest } = newTodo;
    todoApi.createTodo({ data: rest }).then((newTodo) => {
      set(todosState, (todos) => [...todos, newTodo.data?.createSampleTodo as SampleTodo]);
    });
  });

  const deleteTodo = useRecoilCallback(({ set }) => (id: string) => {
    todoApi.deleteTodo({ where: { id: id } }).then(() => {
      set(todosState, (todos) => {
        return todos.filter((todo) => {
          return todo.id !== id;
        });
      });
    });
  });

  const updateTodo = useRecoilCallback(
    ({ set }) =>
      (id: string, todoToUpdate: SampleTodoUpdateInput) => {
        todoApi
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .updateTodo({ where: { id: id }, data: todoToUpdate as any })
          .then((todoToUpdate) => {
            set(todosState, (todos) => {
              return todos.map((todo) => {
                return todo.id === todoToUpdate.data?.updateSampleTodo.id
                  ? { ...todo, ...todoToUpdate.data.updateSampleTodo }
                  : { ...todo };
              });
            });
          });
      }
  );

  return {
    todos,
    setTodos,
    initTodos,
    addTodo,
    deleteTodo,
    updateTodo
  };
};
