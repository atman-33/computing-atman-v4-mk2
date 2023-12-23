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
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useBookmark } from '../hooks/useBookmark';
import { useEditLinkShow } from '../hooks/useEditLinkShow';

const CreateBookmark = () => {
  const [open, setOpen] = useState(false);
  const [bookmarkName, setBookmarkName] = useState('');
  const { editLinkShow } = useEditLinkShow();
  const { createBookmark, createBookmarkLoading } = useBookmark();

  /**
   * Create bookmark
   * @returns
   */
  const handleCreateBookmark = () => {
    if (!bookmarkName) {
      return;
    }
    createBookmark(bookmarkName);
    setBookmarkName('');
    setOpen(false);
  };

  return (
    <>
      {!editLinkShow && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button
              className="fixed bottom-8 right-8"
              onClick={() => setBookmarkName('')}
              disabled={createBookmarkLoading}
            >
              <span className="absolute bottom-16 text-xs">Bookmark</span>
              <FontAwesomeIcon
                icon={faPlus}
                className="text-primary-500 dark:text-primary-400 h-10 w-10 cursor-pointer rounded-full bg-gray-200 p-2 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
              />
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create Bookmark</DialogTitle>
              <DialogDescription>{`Input your bookmark name here.`}</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="mx-4 grid grid-cols-5 items-center">
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
            <DialogFooter>
              <Button type="submit" onClick={handleCreateBookmark}>
                Create!!
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default CreateBookmark;
