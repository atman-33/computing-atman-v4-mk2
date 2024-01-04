'use client';

/* eslint-disable @nx/enforce-module-boundaries */
import { Input } from '@/components/elements/Input';
import useAuth from '@/features/auth/hooks/useAuth';
import { faFolderClosed, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useBookmark } from '../hooks/useBookmark';
import { useEditLinkShow } from '../hooks/useEditLinkShow';
import { Bookmark } from '../types';

const Bookmarks = () => {
  const { requireAuth } = useAuth();
  const { bookmarksData, bookmarksLoading, bookmarksError } = useBookmark();
  const { setBookmark } = useBookmark();
  const { editLinkShow } = useEditLinkShow();

  const [filterVal, setFilterVal] = useState('');

  if (bookmarksLoading) {
    return null;
  }

  const handleShowBookmark = (bookmark: Bookmark) => () => {
    requireAuth();
    // console.log(id);
    setBookmark(bookmark);
  };

  return (
    <>
      {bookmarksError && <div className="mt-4 text-red-500">{bookmarksError?.message}</div>}
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
            <li key={bookmark.id} className="flex justify-between pr-4">
              <button
                className="ml-1 flex items-center gap-x-2"
                onClick={handleShowBookmark(bookmark)}
                disabled={editLinkShow}
              >
                <FontAwesomeIcon icon={faFolderClosed} />
                <p>{bookmark.name}</p>
              </button>
              <p>{bookmark.displayOrder}</p>
            </li>
          ))}
      </ul>
    </>
  );
};
export default Bookmarks;
