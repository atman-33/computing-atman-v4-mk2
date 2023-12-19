'use client';

/* eslint-disable @nx/enforce-module-boundaries */
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
  return (
    <div>
      <ul key={link.id} className="p-2 hover:bg-gray-300 dark:hover:bg-gray-700">
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
      </ul>
      <hr />
    </div>
  );
};

export default LinkItem;
