/* eslint-disable @nx/enforce-module-boundaries */
'use client';

import { Button } from '@/components/elements/Button';
import Image from '@/components/elements/Image';
import Link from '@/components/elements/Link';
import OkCancelDialog from '@/components/elements/OkCancelDialog';
import { faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEditLinkShow } from '../hooks/useEditLinkShow';
import { useEditingLink } from '../hooks/useEditingLink';
import { useLinks } from '../hooks/useLinks';

const EditLink = () => {
  const { editLinkShow, setEditLinkShow } = useEditLinkShow();
  const { editingLink, setEditingLink } = useEditingLink();
  const { deleteLink, deleteLinkLoading } = useLinks(editingLink?.bookmarkId);

  if (!editingLink) {
    return null;
  }
  const { url, title, description, siteName, image, bookmark } = editingLink;

  const handleEditShow = () => {
    setEditLinkShow((status) => {
      return !status;
    });
  };

  const handleDeleteLink = () => {
    if (!editingLink) {
      return;
    }
    deleteLink(editingLink.id);
    setEditLinkShow(false);
  };

  return (
    <>
      {editLinkShow && (
        <div
          className={`absolute left-0 top-10 z-10 flex h-full w-full transform flex-col bg-white opacity-95 duration-300 ease-in-out dark:bg-gray-900 dark:opacity-[0.98] ${
            editLinkShow ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="my-2 mr-8 flex justify-end gap-4">
            <OkCancelDialog
              title={`Delete Link`}
              description="Are you sure you want to delete this link?"
              clickHandler={handleDeleteLink}
            >
              <button>
                <FontAwesomeIcon icon={faTrashCan} size="lg" />
              </button>
            </OkCancelDialog>
            <button>
              <FontAwesomeIcon icon={faXmark} onClick={handleEditShow} size="2xl" />
            </button>
          </div>
          <div>
            <div className="flex items-center gap-4">
              <Image
                src={image ?? ''}
                alt={title ?? ''}
                width={80}
                height={80}
                className="rounded-md"
              ></Image>
              <Link href={url} className="font-bold" target="_blank">
                {url}
              </Link>
            </div>
            <div className="m-4 grid grid-cols-12">
              <div className="col-span-3">Bookmark</div>
              <div className="col-span-9">{bookmark.name}</div>
            </div>
            <div className="m-4 grid grid-cols-12">
              <div className="col-span-3">Title</div>
              <div className="col-span-9">{title}</div>
            </div>
            <div className="m-4 grid grid-cols-12">
              <div className="col-span-3">Site Name</div>
              <div className="col-span-9">{siteName}</div>
            </div>
            <div className="m-4 grid grid-cols-12">
              <div className="col-span-3">Description</div>
              <div className="col-span-9">{description}</div>
            </div>
          </div>
          <div className="flex justify-start gap-4">
            <Button
              variant={'outline'}
              className="min-w-[80px] rounded-full border-gray-800"
              onClick={() => setEditLinkShow(false)}
            >
              Cancel
            </Button>
            <Button className="min-w-[80px] rounded-full bg-blue-500 text-white shadow hover:bg-blue-700">
              Save
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default EditLink;
