'use client';

import { Button } from '@libs/web/ui-shadcn';
import { useState } from 'react';

const Page = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(10);
  const [countC, setCountC] = useState(100);
  return (
    <>
      <div className="mt-8">
        <p>Clicked Button A {countA} times</p>
        <Button className="my-1" onClick={() => setCountA(countA + 1)}>
          Count Button A
        </Button>
        <p>Clicked Button B {countB} times</p>
        <Button className="my-1" onClick={() => setCountB(countB + 1)}>
          Count Button B
        </Button>
        <p>Clicked Button C {countC} times</p>
        <Button className="my-1" onClick={() => setCountC(countC + 1)}>
          Count Button C
        </Button>
      </div>
    </>
  );
};
export default Page;
