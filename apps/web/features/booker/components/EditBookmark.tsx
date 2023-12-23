'use client';

import { Button } from '@/components/elements/Button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/elements/Dialog';
import { Input } from '@/components/elements/Input';
import { Label } from '@/components/elements/Label';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useBookmark } from '../hooks/useBookmark';

const EditBookmark = () => {
  const [open, setOpen] = useState(false);
  const [bookmarkName, setBookmarkName] = useState('');
  const { bookmark, updateBookmark, updateBookmarkLoading } = useBookmark();

  /**
   * Edit bookmark
   * @returns
   */
  const handleEditBookmark = () => {
    if (!bookmarkName) {
      return;
    }
    updateBookmark(bookmark?.id ?? '', bookmarkName);
    setBookmarkName('');
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button
            className={!bookmark?.id || bookmark.id === '' ? 'hidden' : ''}
            onClick={() => setBookmarkName('')}
            disabled={updateBookmarkLoading}
          >
            <FontAwesomeIcon icon={faEdit} size="lg" />
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Bookmark</DialogTitle>
            <DialogDescription>{`Rename your bookmark here.`}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-2">
            <div className="mx-4 items-center">
              <div className="my-2 mr-4 text-sm">{`Current name : ${bookmark?.name}`}</div>
              <div className="flex items-center gap-4">
                <Label htmlFor="name" className="text-left">
                  Name
                </Label>
                <Input
                  id="name"
                  value={bookmarkName}
                  onChange={(e) => setBookmarkName(e.target.value)}
                  className="col-span-4"
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleEditBookmark}>
              Rename Bookmark!!
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditBookmark;
