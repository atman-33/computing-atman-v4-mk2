'use client';

import { Button } from '@libs/web/ui-shadcn';
import React from 'react';

const Page = () => {
  console.log('render');

  const [countA, setCounntA] = React.useState({ val: 0 });

  const obj1 = { val: 0 };
  const obj2 = obj1;
  // const obj3 = { val: 0 };
  const isSame = Object.is(obj1, obj2);
  console.log(isSame);

  return (
    <div>
      <div className="mt-8">
        <h3>Re Rendering ?</h3>
        <Button
          onClick={() =>
            setCounntA((prev) => {
              const newState = { ...prev };
              prev.val = 1;
              return newState;
            })
          }
          className="my-4"
        >
          Button A
        </Button>
      </div>
      <div>
        <p>Button A Clicked: {countA.val}</p>
      </div>
      <div className="mt-8">
        <h4>Note</h4>
        <li>Rendering is excuted when state is changed.</li>
      </div>
    </div>
  );
};

export default Page;
