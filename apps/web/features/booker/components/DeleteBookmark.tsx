/* eslint-disable @nx/enforce-module-boundaries */
import useAuth from '@/features/auth/hooks/useAuth';
import { useMutation } from '@apollo/client';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DeleteBookmarkDocument, GetBookmarksDocument } from '@libs/web/data-access-graphql';
import { useBookmarkId } from '../hooks/useBookmarkId';

const DeleteBookmark = () => {
  const { requireAuth } = useAuth();

  const { bookmarkId, resetBookmarkId } = useBookmarkId();
  const [deleteBookmark] = useMutation(DeleteBookmarkDocument);

  /**
   * Delete bookmark
   */
  const handleDeleteBookmark = async () => {
    requireAuth();

    try {
      await deleteBookmark({
        variables: {
          where: {
            id: bookmarkId.id
          }
        },
        refetchQueries: [GetBookmarksDocument]
      });
      resetBookmarkId();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={handleDeleteBookmark}>
      <FontAwesomeIcon icon={faTrashCan} size="lg" />
    </button>
  );
};

export default DeleteBookmark;