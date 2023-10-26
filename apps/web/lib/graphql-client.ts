import { env } from '@libs/shared/config';
import { getGraphqlClient } from '@libs/web/data-access-graphql';

// If env.NEXT_PUBLIC_WEB_GQL_URL is undefined, throw exeption.
if (!env.NEXT_PUBLIC_WEB_GQL_URL) {
  throw new Error('NEXT_PUBLIC_WEB_GQL_URL is undefined');
}

export const gql = getGraphqlClient(env.NEXT_PUBLIC_WEB_GQL_URL);
