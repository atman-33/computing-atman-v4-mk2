/* eslint-disable @nx/enforce-module-boundaries */
import useAuth from '@/features/auth/hooks/useAuth';
import { useMutation, useQuery } from '@apollo/client';
import {
  CreateLinkDocument,
  DeleteLinkDocument,
  GetLinksDocument,
  UpdateLinkDocument
} from '@libs/web/data-access-graphql';
import { UpdateLinkData } from '../types';

export const useLinks = (bookmarkId: string | undefined) => {
  const { requireAuth } = useAuth();
  const [createLinkMutation, { loading: createLinkLoading, error: createLinkError }] =
    useMutation(CreateLinkDocument);
  const [deleteLinkMutation, { loading: deleteLinkLoading, error: deleteLinkError }] =
    useMutation(DeleteLinkDocument);
  const [updateLinkMutation, { loading: updateLinkLoading, error: updateLinkError }] =
    useMutation(UpdateLinkDocument);

  /**
   * Get links
   */
  const { data: linksData, loading: linksLoading } = useQuery(GetLinksDocument, {
    variables: {
      where: {
        bookmarkId: {
          equals: bookmarkId
        }
      }
    },
    skip: !bookmarkId
  });

  /**
   * Create link
   * @param url
   */
  const createLink = async (url: string) => {
    if (!bookmarkId) {
      return;
    }

    requireAuth();
    try {
      await createLinkMutation({
        variables: {
          data: {
            bookmarkId: bookmarkId ?? '',
            url: url
          }
        },
        refetchQueries: [
          {
            query: GetLinksDocument,
            variables: {
              where: { bookmarkId: { equals: bookmarkId } }
            }
          }
        ]
      });
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Delete link
   * @param linkId
   * @returns
   */
  const deleteLink = async (linkId: string) => {
    if (!bookmarkId) {
      return;
    }

    requireAuth();
    try {
      await deleteLinkMutation({
        variables: {
          where: {
            id: linkId
          }
        },
        refetchQueries: [
          {
            query: GetLinksDocument,
            variables: {
              where: { bookmarkId: { equals: bookmarkId } }
            }
          }
        ]
      });
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Update link
   * @param updateLinkDto
   */
  const updateLink = async (updateLinkData: UpdateLinkData) => {
    requireAuth();
    try {
      await updateLinkMutation({
        variables: {
          data: updateLinkData
        },
        refetchQueries: [
          {
            query: GetLinksDocument,
            variables: {
              where: {
                bookmarkId: {
                  equals: bookmarkId
                }
              }
            }
          },
          {
            query: GetLinksDocument,
            variables: {
              where: { bookmarkId: { equals: updateLinkData.bookmarkId } }
            }
          }
        ]
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    linksData,
    linksLoading,
    createLink,
    createLinkLoading,
    createLinkError,
    deleteLink,
    deleteLinkLoading,
    deleteLinkError,
    updateLink,
    updateLinkLoading,
    updateLinkError
  };
};
