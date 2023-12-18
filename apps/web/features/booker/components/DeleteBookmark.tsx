'use client';

/* eslint-disable @nx/enforce-module-boundaries */
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useBookmark } from '../hooks/useBookmark';

const DeleteBookmark = () => {
  const { bookmark, deleteBookmark, resetBookmark } = useBookmark();

  /**
   * Delete bookmark
   */
  const handleDeleteBookmark = async () => {
    await deleteBookmark(bookmark?.id ?? '');
    resetBookmark();
  };

  return (
    <button onClick={handleDeleteBookmark}>
      <FontAwesomeIcon icon={faTrashCan} size="lg" />
    </button>
  );
};

export default DeleteBookmark;
