import {
  CreateSampleTodoInput,
  DeleteSampleTodoInput,
  SampleTodo,
  UpdateSampleTodoInput
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

  const addTodo = useRecoilCallback(({ set }) => (newTodo: CreateSampleTodoInput) => {
    todoApi.createTodo(newTodo).then((newTodo) => {
      set(todosState, (todos) => [...todos, newTodo.data?.createSampleTodo as SampleTodo]);
    });
  });

  const deleteTodo = useRecoilCallback(({ set }) => (todoToDelete: DeleteSampleTodoInput) => {
    todoApi.deleteTodo(todoToDelete).then(() => {
      set(todosState, (todos) => {
        return todos.filter((todo) => {
          return todo._id !== todoToDelete._id;
        });
      });
    });
  });

  const updateTodo = useRecoilCallback(({ set }) => (todoToUpdate: UpdateSampleTodoInput) => {
    todoApi.updateTodo(todoToUpdate).then((todoToUpdate) => {
      set(todosState, (todos) => {
        return todos.map((todo) => {
          return todo._id === todoToUpdate.data?.updateSampleTodo._id
            ? { ...todo, ...todoToUpdate.data.updateSampleTodo }
            : { ...todo };
        });
      });
    });
  });

  return {
    todos,
    setTodos,
    initTodos,
    addTodo,
    deleteTodo,
    updateTodo
  };
};
