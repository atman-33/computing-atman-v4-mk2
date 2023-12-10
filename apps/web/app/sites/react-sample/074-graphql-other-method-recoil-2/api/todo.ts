import { apolloClient } from '@/lib/apollo-client';
import {
  CreateOneSampleTodoArgs,
  DeleteOneSampleTodoArgs,
  UpdateOneSampleTodoArgs
} from '@libs/api/prisma/generated-db-types';
import {
  CreateSampleTodoDocument,
  DeleteSampleTodoDocument,
  GetSampleTodosDocument,
  UpdateSampleTodoDocument
} from '@libs/web/data-access-graphql';

const getTodos = async () => {
  const result = await apolloClient.query({
    query: GetSampleTodosDocument
  });

  return result;
};

const createTodo = async (createOneSampleTodoArgs: CreateOneSampleTodoArgs) => {
  const result = await apolloClient.mutate({
    mutation: CreateSampleTodoDocument,
    variables: {
      data: createOneSampleTodoArgs.data
    }
  });

  return result;
};

const updateTodo = async (updateOneSampleTodoArgs: UpdateOneSampleTodoArgs) => {
  const result = await apolloClient.mutate({
    mutation: UpdateSampleTodoDocument,
    variables: {
      data: updateOneSampleTodoArgs.data,
      where: updateOneSampleTodoArgs.where
    }
  });

  return result;
};

const deleteTodo = async (deleteOneSampleTodoArgs: DeleteOneSampleTodoArgs) => {
  const result = await apolloClient.mutate({
    mutation: DeleteSampleTodoDocument,
    variables: {
      where: deleteOneSampleTodoArgs.where
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
