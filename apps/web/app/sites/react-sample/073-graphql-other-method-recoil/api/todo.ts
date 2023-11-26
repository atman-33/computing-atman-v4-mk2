import { gqlClient } from '@/lib/graphql-client';
import {
  CreateSampleTodoDocument,
  CreateSampleTodoInput,
  DeleteSampleTodoDocument,
  DeleteSampleTodoInput,
  GetSampleTodosDocument,
  UpdateSampleTodoDocument,
  UpdateSampleTodoInput
} from '@libs/web/data-access-graphql';

const getTodos = async () => {
  const result = await gqlClient.query({
    query: GetSampleTodosDocument
  });

  return result;
};

const createTodo = async (todo: CreateSampleTodoInput) => {
  const result = await gqlClient.mutate({
    mutation: CreateSampleTodoDocument,
    variables: {
      createSampleTodoData: todo
    }
  });

  return result;
};

const updateTodo = async (todo: UpdateSampleTodoInput) => {
  const result = await gqlClient.mutate({
    mutation: UpdateSampleTodoDocument,
    variables: {
      updateSampleTodoData: todo
    }
  });

  return result;
};

const deleteTodo = async (todo: DeleteSampleTodoInput) => {
  const result = await gqlClient.mutate({
    mutation: DeleteSampleTodoDocument,
    variables: {
      deleteSampleTodoData: todo
    }
  });

  return result;
};

const todoApi = {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo
};

export default todoApi;
