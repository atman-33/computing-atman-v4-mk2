/* eslint-disable @nx/enforce-module-boundaries */
'use client';

import ComboBox, { ComboBoxItem } from '@/components/elements/ComboBox';
import { useState } from 'react';
import { useBookmarks } from '../hooks/useBookmarks';
import { useComboBoxSelectedBookmark } from '../hooks/useComboBoxSelectedBookmark';

const BookmarkComboBox = () => {
  const { comboBoxSelectedBookmark, setComboBoxSelectedBookmark } = useComboBoxSelectedBookmark();

  const { bookmarksData } = useBookmarks();
  const [bookmarkId, setBookmarkId] = useState<string>('');

  const items: ComboBoxItem[] =
    bookmarksData === undefined
      ? []
      : bookmarksData.bookmarks.map((bookmark) => ({
          id: bookmark.id,
          value: bookmark.name
        }));

  const setBookmarkIdHandler = (id: string) => {
    console.log(id);
    setBookmarkId(id);
  };

  return (
    <ComboBox
      items={items}
      selectedId={bookmarkId}
      setSelectedId={setBookmarkIdHandler}
      defaultPlaceholder={defaultBookmarkName}
    ></ComboBox>
  );
};

export default BookmarkComboBox;
