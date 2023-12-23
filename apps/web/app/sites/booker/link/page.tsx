'use client';

import { useSearchParams } from 'next/navigation';

/**
 * Does not use this page. This is an example of using useSearchParams.
 * @returns
 */
const Page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  return (
    <>
      <div>{`id: ${id}`}</div>
    </>
  );
};

export default Page;
