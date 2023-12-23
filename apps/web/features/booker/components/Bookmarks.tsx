'use client';

/* eslint-disable @nx/enforce-module-boundaries */
import { Input } from '@/components/elements/Input';
import useAuth from '@/features/auth/hooks/useAuth';
import { useQuery } from '@apollo/client';
import { faFolderClosed, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetBookmarksDocument } from '@libs/web/data-access-graphql';
import { useState } from 'react';
import { useBookmark } from '../hooks/useBookmark';
import { BookmarkType } from '../stores/bookmarkState';

const Bookmarks = () => {
  const { requireAuth } = useAuth();
  const { data: bookmarksData, loading, error } = useQuery(GetBookmarksDocument);
  const { setBookmark } = useBookmark();
  const [filterVal, setFilterVal] = useState('');

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
      <div className="mr-2  flex items-center">
        <FontAwesomeIcon icon={faSearch} className="mx-2" />
        <Input
          type="text"
          placeholder="Search..."
          className="my-2 w-full"
          value={filterVal}
          onChange={(e) => setFilterVal(e.target.value)}
        />
      </div>
      <h2 className="my-2 text-xl font-bold">Bookmarks</h2>

      <ul className="flex flex-col gap-2">
        {bookmarksData?.bookmarks
          .filter((bookmark) => bookmark.name.toLowerCase().includes(filterVal.toLowerCase()))
          .map((bookmark) => (
            <li key={bookmark.id} className="flex flex-wrap">
              <button
                className="ml-1 flex items-center gap-x-2"
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
