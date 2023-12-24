/* eslint-disable @nx/enforce-module-boundaries */
'use client';

import { Combobox, ComboboxItem } from '@/components/elements/Combobox';
import { useCallback, useState } from 'react';
import { useBookmarks } from '../hooks/useBookmarks';
import { useComboBoxSelectedBookmark } from '../hooks/useComboBoxSelectedBookmark';

const BookmarkComboBox = () => {
  const { comboBoxSelectedBookmark, setComboBoxSelectedBookmark } = useComboBoxSelectedBookmark();

  const { bookmarksData } = useBookmarks();
  const [bookmarkId, setBookmarkId] = useState<string>('');

  const items: ComboboxItem[] =
    bookmarksData === undefined
      ? []
      : bookmarksData.bookmarks.map((bookmark) => ({
          value: bookmark.id,
          label: bookmark.name
        }));

  const handleSelectBookmark = useCallback(
    (item: ComboboxItem) => {
      console.log(`value: ${item.value}, label: ${item.label}`);
      setComboBoxSelectedBookmark(item);
    },
    [comboBoxSelectedBookmark]
  );

  return (
    <Combobox
      items={items}
      selectedItem={comboBoxSelectedBookmark}
      setSelectedItem={handleSelectBookmark}
    ></Combobox>
  );
};

export default BookmarkComboBox;
