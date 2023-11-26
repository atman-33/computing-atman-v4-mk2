'use client';

import { Button } from '@libs/web/ui-shadcn';
import { useCallback, useState } from 'react';
import Child from './Child';

const Page = () => {
  console.log('Parent render');
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  const clickHandler = useCallback(() => {
    console.log('countB', countB);
    setCountB(countB + 1);
  }, [countB]);

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
        <li>useMemo: memorize a value.</li>
        <li>React.memo: memorize a component.</li>
        <li>As useMemo costs memory, use it carefully.(using it to heavy calculation is better)</li>
      </div>
    </>
  );
};

export default Page;
