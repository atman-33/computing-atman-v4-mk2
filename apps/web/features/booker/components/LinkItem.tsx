/* eslint-disable @nx/enforce-module-boundaries */
'use client';

import HoverEditButton from '@/components/elements/HoverEditButton';
import Image from '@/components/elements/Image';
import Link from '@/components/elements/Link';
import { faPager } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  id: string;
  url: string;
  title: string | null;
  description: string | null;
  siteName: string | null;
  image: string | null;
};

const LinkItem = ({ link }: { link: Props }) => {
  const handleEditLink = () => {
    console.log('edit link');
  };

  return (
    <div>
      <HoverEditButton clickHandler={() => handleEditLink()} className="right-12 top-2">
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
                  <div className="my-1 flex items-start gap-x-2 text-xs">
                    <FontAwesomeIcon icon={faPager} className="h-[16px]" />
                    <div>{link.siteName ?? 'Not available'}</div>
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
