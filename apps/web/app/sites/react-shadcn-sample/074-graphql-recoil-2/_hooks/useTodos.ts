import {
  CreateSampleTodoInput,
  DeleteSampleTodoInput,
  SampleTodo,
  UpdateSampleTodoInput
} from '@libs/web/data-access-graphql';
import { useRecoilState } from 'recoil';
import { todosState } from '../_stores/todosState';
import todoApi from '../api/todo';

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

  const updateTodo = (todoToUpdate: UpdateSampleTodoInput) => {
    todoApi.updateTodo(todoToUpdate).then((todoToUpdate) => {
      setTodos((todos) => {
        return todos.map((todo) => {
          return todo._id === todoToUpdate.data?.updateSampleTodo._id
            ? { ...todo, ...todoToUpdate.data.updateSampleTodo }
            : { ...todo };
        });
      });
    });
  };

  return {
    todos,
    setTodos,
    initTodos,
    addTodo,
    deleteTodo,
    updateTodo
  };
};
