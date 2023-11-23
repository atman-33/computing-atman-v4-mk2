// eslint-disable-next-line @nx/enforce-module-boundaries
import { NEXT_PUBLIC_API_GQL_URL } from '@/config/index';
import { getGraphqlClient } from '@libs/web/data-access-graphql';

// If env.NEXT_PUBLIC_API_GQL_URL is undefined, throw exeption.
if (!NEXT_PUBLIC_API_GQL_URL) {
  throw new Error('NEXT_PUBLIC_API_GQL_URL is undefined');
}

export const gqlClient = getGraphqlClient(NEXT_PUBLIC_API_GQL_URL);
