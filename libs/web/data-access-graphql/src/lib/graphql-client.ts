import { ApolloClient, InMemoryCache } from '@apollo/client';

export const getGraphqlClient = (url: string) => {
  const client = new ApolloClient({
    uri: url,
    cache: new InMemoryCache(),
    credentials: 'include',
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache'
      },
      query: {
        fetchPolicy: 'no-cache'
      }
    }
  });

  return client;
};
