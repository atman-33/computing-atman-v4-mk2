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
   * Get max display order
   * @returns
   */
  const getBookmarkMaxDisplayOrder = () => {
    if (!bookmarksData || bookmarksData.bookmarks.length === 0) {
      return 0;
    }
    return Math.max(...bookmarksData.bookmarks.map((bookmark) => bookmark.displayOrder ?? 0));
  };

  /**
   * Create bookmark
   * @param bookmarkName
   */
  const createBookmark = async (bookmarkName: string, displayOrder?: number) => {
    // check if user is logged in
    requireAuth();

    try {
      const response = await createBookmarkMutation({
        variables: {
          data: {
            name: bookmarkName,
            displayOrder: getBookmarkMaxDisplayOrder() + 1
          }
        },
        refetchQueries: [GetBookmarksDocument]
      });

      setBookmark({
        id: response.data?.createBookmark.id ?? '',
        name: response.data?.createBookmark.name ?? '',
        displayOrder: response.data?.createBookmark.displayOrder ?? 0
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
        name: response.data?.updateBookmark.name ?? '',
        displayOrder: response.data?.updateBookmark.displayOrder ?? 0
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
