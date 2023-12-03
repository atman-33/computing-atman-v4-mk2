import { useQuery } from '@apollo/client';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetBookmarksDocument } from '@libs/web/data-access-graphql';

const Bookmarks = () => {
  const { data, loading, error } = useQuery(GetBookmarksDocument);

  return (
    <div className="grid grid-cols-3 gap-4">
      {data?.bookmarks.map((bookmark) => (
        <div key={bookmark._id} className="flex flex-wrap items-center gap-x-2">
          <FontAwesomeIcon icon={faFolder} />
          <p>{bookmark.name}</p>
        </div>
      ))}
    </div>
  );
};
export default Bookmarks;
