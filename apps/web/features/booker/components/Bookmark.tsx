'use client';

/* eslint-disable @nx/enforce-module-boundaries */
import DotFlashing from '@/components/elements/DotFlashing';
import { Input } from '@/components/elements/Input';
import { ScrollArea } from '@/components/elements/ScrollArea';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useBookmark } from '../hooks/useBookmark';
import { useEditLinkShow } from '../hooks/useEditLinkShow';
import { useLink } from '../hooks/useLink';
import AddLink from './AddLink';
import DeleteBookmark from './DeleteBookmark';
import EditBookmark from './EditBookmark';
import LinkItem from './LinkItem';

const Bookmark = () => {
  const { bookmark } = useBookmark();
  const { linksData, linksLoading } = useLink(bookmark?.id);
  const { editLinkShow } = useEditLinkShow();
  const [filterVal, setFilterVal] = useState('');

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="ml-4 text-lg font-bold">{bookmark?.name ?? ''}</div>
        {!editLinkShow && (
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faSearch} className="mx-2" />
              <Input
                type="text"
                placeholder="Search..."
                className="my-2 w-full"
                value={filterVal}
                onChange={(e) => setFilterVal(e.target.value)}
              />
            </div>
            {bookmark?.id && <EditBookmark />}
            {bookmark?.id && <DeleteBookmark />}
            {bookmark?.id && <AddLink />}
          </div>
        )}
      </div>
      <hr className="my-2" />
      {linksLoading ? (
        <DotFlashing />
      ) : (
        <ScrollArea className="h-[70vh]">
          <ul>
            {linksData?.links
              .filter(
                (link) =>
                  link.title?.toLowerCase().includes(filterVal.toLowerCase()) ||
                  link.description?.toLowerCase().includes(filterVal.toLowerCase()) ||
                  link.siteName?.toLowerCase().includes(filterVal.toLowerCase())
              )
              .map((link) => link && <LinkItem key={link.id} link={link} />)}
          </ul>
        </ScrollArea>
      )}
    </>
  );
};

export default Bookmark;
