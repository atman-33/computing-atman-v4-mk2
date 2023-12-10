/* eslint-disable @nx/enforce-module-boundaries */
import DotFlashing from '@/components/elements/DotFlashing';
import Image from '@/components/elements/Image';
import Link from '@/components/elements/Link';
import { useMutation, useQuery } from '@apollo/client';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  DeleteBookmarkDocument,
  GetBookmarkDocument,
  GetBookmarksDocument,
  GetLinksDocument
} from '@libs/web/data-access-graphql';
import { useBookmarkId } from '../hooks/useBookmarkId';
import AddLink from './AddLink';

const Bookmark = () => {
  const { bookmarkId, resetBookmarkId } = useBookmarkId();
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
  const [deleteBookmark] = useMutation(DeleteBookmarkDocument);

  /**
   * Delete bookmark
   */
  const handleDeleteBookmark = async () => {
    try {
      await deleteBookmark({
        variables: {
          where: {
            id: bookmarkId.id
          }
        },
        refetchQueries: [GetBookmarksDocument]
      });
      resetBookmarkId();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-wrap items-center justify-between">
        <div className="text-lg font-bold">{bookmarkData?.bookmark.name}</div>
        <div className="flex items-center gap-4">
          <AddLink />
          <button onClick={handleDeleteBookmark}>
            <FontAwesomeIcon icon={faTrashCan} size="lg" />
          </button>
        </div>
      </div>
      <hr className="my-2" />
      {linksLoading ? (
        <DotFlashing />
      ) : (
        <ul>
          {linksData?.links.map((link, index) => (
            <ul key={index}>
              <li>
                <Link href={link.url} target="_blank">
                  <div>{link.title}</div>
                  <div>{link.siteName}</div>
                  <div>{link.description}</div>
                  {link.images && link.images.length > 0 && (
                    <Image
                      src={(link.images && link.images[0]) as string}
                      alt={link.title}
                      width={100}
                      height={100}
                    ></Image>
                  )}
                </Link>
              </li>
            </ul>
          ))}
        </ul>
      )}
    </>
  );
};

export default Bookmark;
