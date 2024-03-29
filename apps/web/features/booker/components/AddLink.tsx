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
import Spinner from '@/components/elements/Spinner';
import { useState } from 'react';
import { useBookmark } from '../hooks/useBookmark';
import { useLink } from '../hooks/useLink';

const AddLink = () => {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState('');

  const { bookmark } = useBookmark();
  const { createLink, createLinkLoading } = useLink(bookmark?.id);

  /**
   * Add link to bookmark
   * @returns
   */
  const handleAddLink = () => {
    if (!url) {
      return;
    }

    createLink(url);
    setUrl('');
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            className="rounded-md"
            size={'sm'}
            onClick={() => setUrl('')}
            disabled={!bookmark?.id || bookmark.id === '' || createLinkLoading}
          >
            {createLinkLoading ? <Spinner /> : '★ Add'}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Link</DialogTitle>
            <DialogDescription>
              {`Input url here. Click create button when you're done.`}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="mx-4 grid grid-cols-5 items-center">
              <Label htmlFor="url" className="text-left">
                URL
              </Label>
              <Input
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="col-span-4"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleAddLink}>
              Create!!
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddLink;
