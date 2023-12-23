'use client';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEditLinkShow } from '../hooks/useEditLinkShow';

const EditLink = () => {
  const { editLinkShow, setEditLinkShow } = useEditLinkShow();

  const handleEditShow = () => {
    setEditLinkShow((status) => {
      // if (status) {
      //   document.body.style.overflow = 'auto';
      // } else {
      //   // Prevent scrolling
      //   document.body.style.overflow = 'hidden';
      // }
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
            <button className="mr-8 mt-11">
              <FontAwesomeIcon icon={faXmark} onClick={handleEditShow} size="2xl" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EditLink;
