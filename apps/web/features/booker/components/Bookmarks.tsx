/* eslint-disable @nx/enforce-module-boundaries */
import useAuth from '@/features/auth/hooks/useAuth';
import { useQuery } from '@apollo/client';
import { faFolderClosed } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetBookmarksDocument } from '@libs/web/data-access-graphql';
import { useBookmarkId } from '../hooks/useBookmarkId';

const Bookmarks = () => {
  const { requireAuth } = useAuth();
  const { data: bookmarksData, loading, error } = useQuery(GetBookmarksDocument);
  const { setBookmarkId } = useBookmarkId();

  if (loading) {
    return null;
  }

  const handleShowBookmark = (id: string) => () => {
    requireAuth();
    // console.log(id);
    setBookmarkId({ id: id });
  };

  return (
    <>
      {error && <div className="mt-4 text-red-500">{error?.message}</div>}
      <h2 className="my-2 text-sm font-bold">My bookmarks</h2>
      <ul className="grid grid-cols-1 gap-2">
        {bookmarksData?.bookmarks.map((bookmark) => (
          <li key={bookmark.id}>
            <button
              className="ml-1 flex flex-wrap items-center gap-x-2"
              onClick={handleShowBookmark(bookmark.id)}
            >
              <FontAwesomeIcon icon={faFolderClosed} />
              <p>{bookmark.name}</p>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Bookmarks;
