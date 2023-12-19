/* eslint-disable @nx/enforce-module-boundaries */

import useAuth from '@/features/auth/hooks/useAuth';
import { useMutation } from '@apollo/client';
import {
  CreateBookmarkDocument,
  DeleteBookmarkDocument,
  GetBookmarksDocument
} from '@libs/web/data-access-graphql';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { bookmarkState } from '../stores/bookmarkState';

export const useBookmark = () => {
  const { requireAuth } = useAuth();
  const [bookmark, setBookmark] = useRecoilState(bookmarkState);
  const [createBookmarkMutation /* { loading, error } */] = useMutation(CreateBookmarkDocument);
  const [deleteBookmarkMutation] = useMutation(DeleteBookmarkDocument);

  /**
   * Reset bookmark
   */
  const resetBookmark = useResetRecoilState(bookmarkState);

  /**
   * Create bookmark
   * @param bookmarkName
   */
  const createBookmark = async (bookmarkName: string) => {
    // check if user is logged in
    requireAuth();

    try {
      const response = await createBookmarkMutation({
        variables: {
          data: {
            name: bookmarkName
          }
        },
        refetchQueries: [GetBookmarksDocument]
      });

      setBookmark({
        id: response.data?.createBookmark.id ?? '',
        name: response.data?.createBookmark.name ?? ''
      });
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Delete bookmark
   * @param bookmarkId
   */
  const deleteBookmark = async (bookmarkId: string) => {
    requireAuth();

    try {
      await deleteBookmarkMutation({
        variables: {
          where: {
            id: bookmarkId
          }
        },
        refetchQueries: [GetBookmarksDocument]
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    bookmark,
    setBookmark,
    resetBookmark,
    createBookmark,
    deleteBookmark
  };
};