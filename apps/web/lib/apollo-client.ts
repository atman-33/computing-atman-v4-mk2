import { NEXT_PUBLIC_API_GQL_URL } from '@/config/index';
import { ApolloClient, InMemoryCache } from '@apollo/client';

// If env.NEXT_PUBLIC_API_GQL_URL is undefined, throw exeption.
if (!NEXT_PUBLIC_API_GQL_URL) {
  throw new Error('NEXT_PUBLIC_API_GQL_URL is undefined');
}

export const apolloClient = new ApolloClient({
  uri: NEXT_PUBLIC_API_GQL_URL,
  cache: new InMemoryCache(),
  credentials: 'include'
});
