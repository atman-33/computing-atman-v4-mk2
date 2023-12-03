'use client';

import { apolloClient } from '@/lib/apollo-client';
import { ApolloProvider as Apollo } from '@apollo/client';

const ApolloProvider = ({ children }: React.PropsWithChildren) => {
  return <Apollo client={apolloClient}>{children}</Apollo>;
};

export default ApolloProvider;
