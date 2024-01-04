/* eslint-disable @nx/enforce-module-boundaries */
'use client';

import HoverEditButton from '@/components/elements/HoverEditButton';
import Image from '@/components/elements/Image';
import Link from '@/components/elements/Link';
import { faCalendarDays, faListOl, faPager } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEditLinkShow } from '../hooks/useEditLinkShow';
import { useEditingLink } from '../hooks/useEditingLink';
import { Link as BookmarkLink } from '../types';

const LinkItem = (props: { link: BookmarkLink }) => {
  const { link } = props;
  const { setEditLinkShow } = useEditLinkShow();
  const { setEditingLink } = useEditingLink();

  const handleShowEditLink = () => {
    setEditingLink(link);
    setEditLinkShow(true);
  };

  // const createdAtDate = new Date(link.createdAt);
  const updatedAtDate = new Date(link.updatedAt);

  return (
    <div>
      <HoverEditButton clickHandler={() => handleShowEditLink()} className="right-12 top-2">
        <ul key={link.id} className="min-h-[80px] p-2 hover:bg-gray-300 dark:hover:bg-gray-700">
          <li className="">
            <Link href={link.url} target="_blank">
              <div className="grid grid-cols-12">
                <div className="col-span-2">
                  <Image
                    src={link.image ?? ''}
                    alt={link.title ?? ''}
                    width={80}
                    height={80}
                    className="rounded-md"
                  ></Image>
                </div>
                <div className="col-span-10 mx-2">
                  <div className="my-1 font-bold">{link.title ?? 'Not available'}</div>
                  <div className="my-1 text-xs">{link.description ?? 'Not available'}</div>
                  <div className="my-1 flex items-start gap-x-4 text-xs">
                    <div className="flex gap-x-1">
                      <FontAwesomeIcon icon={faPager} className="h-[16px]" />
                      <div>{link.siteName ?? 'Not available'}</div>
                    </div>
                    {/* <div className="flex gap-x-1">
                      <FontAwesomeIcon icon={faCalendarDays} className="h-[16px]" />
                      <time>{createdAtDate.toDateString()}</time>
                    </div> */}
                    <div className="flex gap-x-1">
                      <FontAwesomeIcon icon={faCalendarDays} className="h-[16px]" />
                      <time>{updatedAtDate.toDateString()}</time>
                    </div>
                    <div className="flex gap-x-1">
                      <FontAwesomeIcon icon={faListOl} className="h-[16px]" />
                      <time>{link.displayOrder}</time>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </HoverEditButton>

      <hr />
    </div>
  );
};

export default LinkItem;
