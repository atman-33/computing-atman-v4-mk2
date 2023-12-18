'use client';

/* eslint-disable @nx/enforce-module-boundaries */
import DotFlashing from '@/components/elements/DotFlashing';
import Image from '@/components/elements/Image';
import { Input } from '@/components/elements/Input';
import Link from '@/components/elements/Link';
import { ScrollArea } from '@/components/elements/ScrollArea';
import { faEdit, faPager, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useBookmark } from '../hooks/useBookmark';
import { useLinks } from '../hooks/useLinksState';
import AddLink from './AddLink';
import DeleteBookmark from './DeleteBookmark';

const Bookmark = () => {
  const { bookmark } = useBookmark();
  const { linksData, linksLoading } = useLinks(bookmark?.id);
  const [filterVal, setFilterVal] = useState('');

  return (
    <>
      <div className="flex  items-center">
        <FontAwesomeIcon icon={faSearch} className="mx-2" />
        <Input
          type="text"
          placeholder="Seach..."
          className="my-2 w-full"
          value={filterVal}
          onChange={(e) => setFilterVal(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="text-lg font-bold">{bookmark?.name ?? ''}</div>
        <div className="flex items-center gap-4">
          <button>
            <FontAwesomeIcon icon={faEdit} size="lg" />
          </button>
          <AddLink />
          <DeleteBookmark />
        </div>
      </div>
      <hr className="my-2" />
      {linksLoading ? (
        <DotFlashing />
      ) : (
        <ScrollArea className="h-[60vh]">
          <ul>
            {linksData?.links
              .filter(
                (link) =>
                  link.title?.toLowerCase().includes(filterVal.toLowerCase()) ||
                  link.description?.toLowerCase().includes(filterVal.toLowerCase()) ||
                  link.siteName?.toLowerCase().includes(filterVal.toLowerCase())
              )
              .map((link, index) => (
                <ul key={index}>
                  <li className="my-2">
                    <Link href={link.url} target="_blank">
                      <div className="grid grid-cols-12">
                        <div className="col-span-2 pt-2">
                          <Image
                            src={link.image ?? ''}
                            alt={link.title ?? ''}
                            width={80}
                            height={80}
                            className="rounded-md"
                          ></Image>
                        </div>
                        <div className="col-span-10 mx-2">
                          <div className="my-1 font-bold">{link.title}</div>
                          <div className="my-1 text-xs">{link.description}</div>
                          <div className="my-1 flex items-start gap-x-2 text-xs">
                            <FontAwesomeIcon icon={faPager} className="h-[16px]" />
                            <div>{link.siteName}</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <hr />
                </ul>
              ))}
          </ul>
        </ScrollArea>
      )}
    </>
  );
};

export default Bookmark;
