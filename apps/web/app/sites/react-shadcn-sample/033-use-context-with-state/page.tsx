'use client';

import Example from './_components/Example';

const Page = () => {
  return (
    <>
      <Example />
      <div className="mt-8">
        <h4>Note</h4>
        <li>The state and setState of Context Provider can used by Child Components.</li>
      </div>
    </>
  );
};

export default Page;
