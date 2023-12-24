import { useQuery } from '@apollo/client';
import { GetBookmarksDocument } from '@libs/web/data-access-graphql';

export const useBookmarks = () => {
  const {
    data: bookmarksData,
    loading: bookmarksLoading,
    error: bookmarksError
  } = useQuery(GetBookmarksDocument);

  return {
    bookmarksData,
    bookmarksLoading,
    bookmarksError
  };
};
