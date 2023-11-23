import { gqlClient } from '@/lib/graphql-client';
import {
  CreateUserDocument,
  CreateUserInput,
  GetCurrentUserDocument
} from '@libs/web/data-access-graphql';

const createUser = async (user: CreateUserInput) => {
  const response = await gqlClient
    .mutate({
      mutation: CreateUserDocument,
      variables: {
        createUserData: user
      }
    })
    .then((data) => {
      // console.log(data);
      return data.data?.createUser;
    })
    .catch((error) => {
      // console.log(error.message);
      return { error: error.message };
    });

  return response;
};

const getCurrentUser = async () => {
  const response = await gqlClient
    .query({
      query: GetCurrentUserDocument
    })
    .then((data) => {
      console.log('data:', data);
      return data.data?.currentUser;
    })
    .catch((error) => {
      // console.log(error.message);
      return { error: error.message };
    });

  return response;
};

const userApi = {
  createUser,
  getCurrentUser
};

export default userApi;
