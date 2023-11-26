'use client';

import { Button } from '@libs/web/ui-shadcn';
import { useCallback, useState } from 'react';
import Child from './Child';

const Page = () => {
  console.log('Parent render');
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  const clickHandler = useCallback(() => {
    setCountB((pre) => pre + 1);
  }, []);

  return (
    <>
      <div className="mt-8 border-4 border-blue-300 p-4">
        <div>
          <h3>Parent Component</h3>
          <div>
            <Button onClick={() => setCountA((pre) => pre + 1)} className="m-4">
              Button A
            </Button>
            <span>Update parent component</span>
          </div>
        </div>
        <div>
          <p>Button A Clicked: {countA} times</p>
        </div>
        <Child count={countB} onClick={clickHandler} />
      </div>
      <div className="mt-8">
        <h4>Note</h4>
        <li>useCallback can be used to memoize a function.</li>
        <li>useCallback needs 2nd argument.</li>
      </div>
    </>
  );
};

export default Page;
