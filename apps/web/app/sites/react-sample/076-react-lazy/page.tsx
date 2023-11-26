'use client';

import { Button } from '@libs/web/ui-shadcn';
import { Suspense, lazy, startTransition, useState } from 'react';

const LazyComponentA = lazy(() => import('./_components/ComponentA'));
const LazyComponentB = lazy(() => import('./_components/ComponentB'));

const Page = () => {
  const [compA, setCompA] = useState(false);

  return (
    <>
      <div className="mt-8">
        {/* Display Loading... */}
        <Button
          className="m-2"
          onClick={() => {
            setCompA((prev) => !prev);
          }}
        >
          ComponentA (Normal)
        </Button>

        {/* Not Display Loading... */}
        <Button
          className="m-2"
          onClick={() => {
            startTransition(() => {
              setCompA((prev) => !prev);
            });
          }}
        >
          ComponentA (startTransition)
        </Button>
        {/* {compA && <ComponentA />} */}

        <Suspense fallback={<div>Loading...</div>}>
          {compA ? <LazyComponentA /> : <LazyComponentB />}
        </Suspense>
      </div>
    </>
  );
};

export default Page;
