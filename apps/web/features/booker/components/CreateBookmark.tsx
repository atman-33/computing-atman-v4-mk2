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
import { useMutation } from '@apollo/client';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CreateBookmarkDocument, GetBookmarksDocument } from '@libs/web/data-access-graphql';
import { useState } from 'react';
import { useBookmarkId } from '../hooks/useBookmarkId';

const CreateBookmark = () => {
  const [open, setOpen] = useState(false);
  const [bookmarkName, setBookmarkName] = useState('');
  const { bookmarkId, setBookmarkId } = useBookmarkId();
  const [createBookmark, { loading, error }] = useMutation(CreateBookmarkDocument);

  /**
   * Create bookmark
   * @returns
   */
  const handleCreateBookmark = async () => {
    if (!bookmarkName) {
      return;
    }

    try {
      const response = await createBookmark({
        variables: {
          createBookmarkData: {
            name: bookmarkName
          }
        },
        refetchQueries: [GetBookmarksDocument]
      });

      setBookmarkId({
        id: response.data?.createBookmark._id ?? ''
      });
    } catch (error) {
      console.log(error);
    }

    setBookmarkName('');
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="fixed bottom-8 right-8" onClick={() => setBookmarkName('')}>
            <FontAwesomeIcon
              icon={faPlus}
              className="text-primary-500 dark:text-primary-400 h-10 w-10 cursor-pointer rounded-full bg-gray-200 p-2 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
            />
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Bookmark</DialogTitle>
            <DialogDescription>
              {`Input your bookmark name here. Click create button when you're done.`}
            </DialogDescription>
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
    </>
  );
};

export default CreateBookmark;
