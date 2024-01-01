/* eslint-disable @nx/enforce-module-boundaries */

import useAuth from '@/features/auth/hooks/useAuth';
import { useMutation, useQuery } from '@apollo/client';
import {
  CreateBookmarkDocument,
  DeleteBookmarkDocument,
  GetBookmarksDocument,
  UpdateBookmarkDocument
} from '@libs/web/data-access-graphql';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { bookmarkState } from '../stores/bookmarkState';

export const useBookmark = () => {
  const { requireAuth } = useAuth();
  const [bookmark, setBookmark] = useRecoilState(bookmarkState);
  const {
    data: bookmarksData,
    loading: bookmarksLoading,
    error: bookmarksError
  } = useQuery(GetBookmarksDocument);
  const [createBookmarkMutation, { loading: createBookmarkLoading, error: createBookmarkError }] =
    useMutation(CreateBookmarkDocument);
  const [updateBookmarkMutation, { loading: updateBookmarkLoading, error: updateBookmarkError }] =
    useMutation(UpdateBookmarkDocument);
  const [deleteBookmarkMutation, { loading: deleteBookmarkLoading, error: deleteBookmarkError }] =
    useMutation(DeleteBookmarkDocument);

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
   * Update bookmark
   * @param bookmarkId
   * @param bookmarkName
   */
  const updateBookmark = async (bookmarkId: string, bookmarkName: string) => {
    requireAuth();

    try {
      const response = await updateBookmarkMutation({
        variables: {
          data: {
            id: bookmarkId,
            name: bookmarkName
          }
        },
        refetchQueries: [GetBookmarksDocument]
      });

      setBookmark({
        id: response.data?.updateBookmark.id ?? '',
        name: response.data?.updateBookmark.name ?? ''
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
    bookmarksData,
    bookmarksLoading,
    bookmarksError,
    createBookmark,
    createBookmarkLoading,
    createBookmarkError,
    updateBookmark,
    updateBookmarkLoading,
    updateBookmarkError,
    deleteBookmark,
    deleteBookmarkLoading,
    deleteBookmarkError
  };
};
