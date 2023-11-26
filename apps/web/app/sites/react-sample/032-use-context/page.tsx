'use client';

import Example from './_components/Example';

const Page = () => {
  return (
    <>
      <Example />
      <div className="mt-8">
        <h4>Note</h4>
        <li>useContext can be used to share data between components.</li>
        <li>In Next.js, you cannot use createContext within a page.tsx file.</li>
      </div>
    </>
  );
};

export default Page;
