import { apolloClient } from '@/lib/apollo-client';
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
  const result = await apolloClient.query({
    query: GetSampleTodosDocument
  });

  return result;
};

const createTodo = async (todo: CreateSampleTodoInput) => {
  const result = await apolloClient.mutate({
    mutation: CreateSampleTodoDocument,
    variables: {
      createSampleTodoData: todo
    }
  });

  return result;
};

const updateTodo = async (todo: UpdateSampleTodoInput) => {
  const result = await apolloClient.mutate({
    mutation: UpdateSampleTodoDocument,
    variables: {
      updateSampleTodoData: todo
    }
  });

  return result;
};

const deleteTodo = async (todo: DeleteSampleTodoInput) => {
  const result = await apolloClient.mutate({
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
