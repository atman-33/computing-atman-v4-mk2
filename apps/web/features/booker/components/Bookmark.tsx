/* eslint-disable @nx/enforce-module-boundaries */
import DotFlashing from '@/components/elements/DotFlashing';
import Image from '@/components/elements/Image';
import Link from '@/components/elements/Link';
import { useQuery } from '@apollo/client';
import { faPager } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetBookmarkDocument, GetLinksDocument } from '@libs/web/data-access-graphql';
import { useBookmarkId } from '../hooks/useBookmarkId';
import AddLink from './AddLink';
import DeleteBookmark from './DeleteBookmark';

const Bookmark = () => {
  const { bookmarkId } = useBookmarkId();
  const { data: bookmarkData } = useQuery(GetBookmarkDocument, {
    variables: {
      where: { id: bookmarkId.id ?? '' }
    }
  });
  const { data: linksData, loading: linksLoading } = useQuery(GetLinksDocument, {
    variables: {
      urls: bookmarkData?.bookmark.links ?? []
    }
  });

  return (
    <>
      <div className="flex flex-wrap items-center justify-between">
        <div className="text-lg font-bold">{bookmarkData?.bookmark.name}</div>
        <div className="flex items-center gap-4">
          <AddLink />
          <DeleteBookmark />
        </div>
      </div>
      <hr className="my-2" />
      {linksLoading ? (
        <DotFlashing />
      ) : (
        <ul>
          {linksData?.links.map((link, index) => (
            <ul key={index}>
              <li className="my-2">
                <Link href={link.url} target="_blank">
                  <div className="grid grid-cols-12">
                    <div className="col-span-2 pt-2">
                      {link.images && link.images.length > 0 && (
                        <Image
                          src={(link.images && link.images[0]) as string}
                          alt={link.title}
                          width={80}
                          height={80}
                          className="rounded-md"
                        ></Image>
                      )}
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
      )}
    </>
  );
};

export default Bookmark;
