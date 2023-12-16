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
import useAuth from '@/features/auth/hooks/useAuth';
import { useMutation } from '@apollo/client';
import { CreateLinkDocument, GetLinksDocument } from '@libs/web/data-access-graphql';
import { useState } from 'react';
import { useBookmarkId } from '../hooks/useBookmarkId';

const AddLink = () => {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState('');

  const { requireAuth } = useAuth();
  const { bookmarkId } = useBookmarkId();

  const [createLink, { loading, error }] = useMutation(CreateLinkDocument);

  /**
   * Add link to bookmark
   * @returns
   */
  const handleAddLink = async () => {
    requireAuth();

    if (!url) {
      return;
    }

    try {
      await createLink({
        variables: {
          data: {
            bookmarkId: bookmarkId.id,
            url: url
          }
        },
        refetchQueries: [
          {
            query: GetLinksDocument,
            variables: {
              where: { bookmarkId: { equals: bookmarkId.id } }
            }
          }
        ]
      });
    } catch (error) {
      console.log(error);
    } finally {
      setUrl('');
      setOpen(false);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            className="rounded-md"
            size={'sm'}
            onClick={() => setUrl('')}
            disabled={!bookmarkId.id || bookmarkId.id === ''}
          >
            ★ Add
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
