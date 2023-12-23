/* eslint-disable @nx/enforce-module-boundaries */
'use client';

import Bookmark from '@/features/booker/components/Bookmark';
import EditLink from '@/features/booker/components/EditLink';

const Page = () => {
  return (
    <>
      <div className="relative">
        <Bookmark />
        <EditLink />
      </div>
    </>
  );
};

export default Page;
