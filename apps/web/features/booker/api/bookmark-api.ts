import useWatchQuery from '@/hooks/useWatchQuery';
import { gqlClient } from '@/lib/graphql-client';
import {
  CreateBookmarkDocument,
  CreateBookmarkInput,
  GetBookmarksDocument
} from '@libs/web/data-access-graphql';

const createBookmark = async (bookmark: CreateBookmarkInput) => {
  const response = await gqlClient
    .mutate({
      mutation: CreateBookmarkDocument,
      variables: {
        createBookmarkData: bookmark
      }
    })
    .then((data) => {
      // console.log(data);
      return data.data?.createBookmark;
    })
    .catch((error) => {
      // console.log(error.message);
      return { error: error.message };
    });

  return response;
};

const getBoookmarks = async () => {
  const response = await gqlClient
    .query({
      query: GetBookmarksDocument
    })
    .then((data) => {
      // console.log('data:', data);
      return data.data?.bookmarks;
    })
    .catch((error) => {
      // console.log(error.message);
      return { error: error.message };
    });

  return response;
};

/**
 * Get bookmarks and watch for changes
 * @param updateCallback
 * @returns
 */
const watchBookmarks = (updateCallback: any) => useWatchQuery(GetBookmarksDocument, updateCallback);

const bookmarkApi = {
  createBookmark,
  watchBookmarks,
  getBoookmarks
};

export default bookmarkApi;
