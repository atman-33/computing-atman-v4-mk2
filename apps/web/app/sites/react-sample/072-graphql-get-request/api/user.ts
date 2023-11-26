import { gqlClient } from '@/lib/graphql-client';
import { GetSampleUsersDocument } from '@libs/web/data-access-graphql';

export const getUsers = async () => {
  const result = await gqlClient.query({
    query: GetSampleUsersDocument
  });

  return result;
};
