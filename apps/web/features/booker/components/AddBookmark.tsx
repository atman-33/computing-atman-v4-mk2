'use client';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AddBookmark = () => {
  return (
    <div className="fixed bottom-8 right-8">
      <FontAwesomeIcon
        icon={faPlus}
        className="text-primary-500 dark:text-primary-400 h-10 cursor-pointer rounded-full bg-gray-200 p-2 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
      />
    </div>
  );
};

export default AddBookmark;
