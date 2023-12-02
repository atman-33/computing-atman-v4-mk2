import { apolloClient } from '@/lib/apollo-client';
import { GetSampleUsersDocument } from '@libs/web/data-access-graphql';

export const getUsers = async () => {
  const result = await apolloClient.query({
    query: GetSampleUsersDocument
  });

  return result;
};
