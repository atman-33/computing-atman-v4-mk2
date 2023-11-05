import { gql } from '@/lib/graphql-client';
import { GetSampleUsersDocument } from '@libs/web/data-access-graphql';

export const getUsers = async () => {
  const result = await gql.query({
    query: GetSampleUsersDocument
  });

  return result;
};
