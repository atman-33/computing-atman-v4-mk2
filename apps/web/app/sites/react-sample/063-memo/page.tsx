'use client';

import { Button } from '@libs/web/ui-shadcn';
import { useState } from 'react';
import Child from './Child';

const Page = () => {
  console.log('Parent render');
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

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
          <div>
            <Button onClick={() => setCountB((pre) => pre + 1)} className="m-4">
              Button B
            </Button>
            <span>Update child component</span>
          </div>
        </div>
        <div>
          <p>Button A Clicked: {countA} times</p>
        </div>
        <Child countB={countB} />
      </div>
      <div className="mt-8">
        <h4>Note</h4>
        <li>React memo can be used to improve the performance.</li>
        <li>React memo allows rendering only when the State included in Props is updated.</li>
      </div>
    </>
  );
};

export default Page;
