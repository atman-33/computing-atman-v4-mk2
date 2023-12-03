import { useMutation } from '@apollo/client';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DeleteBookmarkDocument, GetBookmarksDocument } from '@libs/web/data-access-graphql';
import { useBookmark } from '../hooks/useBookmark';
import AddLink from './AddLink';

const Bookmark = () => {
  const { bookmark, resetBookmark } = useBookmark();
  const [deleteBookmark] = useMutation(DeleteBookmarkDocument);

  /**
   * Delete bookmark
   */
  const handleDeleteBookmark = async () => {
    try {
      await deleteBookmark({
        variables: {
          deleteBookmarkData: {
            _id: bookmark._id
          }
        },
        refetchQueries: [GetBookmarksDocument]
      });
      resetBookmark();
      // console.log(bookmark);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-wrap items-center justify-between">
        <div>{bookmark.name}</div>
        <div className="flex items-center gap-4">
          <AddLink />
          <button onClick={handleDeleteBookmark}>
            <FontAwesomeIcon icon={faTrashCan} size="lg" />
          </button>
        </div>
      </div>
      <ul>
        {bookmark.links.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>
    </>
  );
};

export default Bookmark;
