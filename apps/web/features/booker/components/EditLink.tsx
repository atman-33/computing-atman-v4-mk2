/* eslint-disable @nx/enforce-module-boundaries */
'use client';

import Image from '@/components/elements/Image';
import Link from '@/components/elements/Link';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEditLinkShow } from '../hooks/useEditLinkShow';
import { useEditingLink } from '../hooks/useEditingLink';

const EditLink = () => {
  const { editLinkShow, setEditLinkShow } = useEditLinkShow();
  const { editingLink, setEditingLink } = useEditingLink();

  if (!editingLink) {
    return null;
  }
  const { url, title, description, siteName, image, bookmarkId } = editingLink;

  const handleEditShow = () => {
    setEditLinkShow((status) => {
      return !status;
    });
  };

  return (
    <>
      {editLinkShow && (
        <div
          className={`absolute left-0 top-10 z-10 h-full w-full transform bg-white opacity-95 duration-300 ease-in-out dark:bg-gray-900 dark:opacity-[0.98] ${
            editLinkShow ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-end">
            <button className="mr-8 mt-4">
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
              <div className="col-span-3">Bookmark ID</div>
              <div className="col-span-9">{bookmarkId}</div>
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
        </div>
      )}
    </>
  );
};

export default EditLink;
