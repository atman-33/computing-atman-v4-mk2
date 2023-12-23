'use client';

/* eslint-disable @nx/enforce-module-boundaries */
import OkCancelDialog from '@/components/elements/OkCancelDialog';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useBookmark } from '../hooks/useBookmark';

const DeleteBookmark = () => {
  const { bookmark, deleteBookmark, deleteBookmarkLoading, resetBookmark } = useBookmark();

  /**
   * Delete bookmark
   */
  const handleDeleteBookmark = () => {
    deleteBookmark(bookmark?.id ?? '');
    resetBookmark();
  };

  return (
    <>
      <OkCancelDialog
        title={`Delete Bookmark ${bookmark?.name}`}
        description="Are you sure you want to delete this bookmark?"
        clickHandler={handleDeleteBookmark}
      >
        <button
          className={!bookmark?.id || bookmark.id === '' ? 'hidden' : ''}
          disabled={deleteBookmarkLoading}
        >
          <FontAwesomeIcon icon={faTrashCan} size="lg" />
        </button>
      </OkCancelDialog>
    </>
  );
};

export default DeleteBookmark;
