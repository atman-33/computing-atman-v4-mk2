/* eslint-disable @nx/enforce-module-boundaries */
import useAuth from '@/features/auth/hooks/useAuth';
import { useQuery } from '@apollo/client';
import { faFolderClosed } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetBookmarksDocument } from '@libs/web/data-access-graphql';
import { useBookmark } from '../hooks/useBookmark';
import { BookmarkType } from '../stores/bookmarkState';

const Bookmarks = () => {
  const { requireAuth } = useAuth();
  const { data: bookmarksData, loading, error } = useQuery(GetBookmarksDocument);
  const { setBookmark } = useBookmark();

  if (loading) {
    return null;
  }

  const handleShowBookmark = (bookmark: BookmarkType) => () => {
    requireAuth();
    // console.log(id);
    setBookmark(bookmark);
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
              onClick={handleShowBookmark(bookmark)}
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
