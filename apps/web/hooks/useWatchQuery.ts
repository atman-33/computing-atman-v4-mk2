import { useQuery } from '@apollo/client';
import { useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useWatchQuery = (query: any, updateCallback: any) => {
  const { data, subscribeToMore } = useQuery(query);

  useEffect(() => {
    const unsubscribe = subscribeToMore({
      document: query,
      updateQuery: (prev, { subscriptionData }) => {
        updateCallback(subscriptionData.data);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [query, subscribeToMore, updateCallback]);

  return data;
};

export default useWatchQuery;
