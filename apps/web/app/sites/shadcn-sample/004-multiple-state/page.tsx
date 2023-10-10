'use client';

import { Button } from '@libs/web/ui-shadcn';
import { useState } from 'react';

const Page = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(10);
  const [countC, setCountC] = useState(100);
  return (
    <>
      <p>Clicked Button A {countA} times</p>
      <Button onClick={() => setCountA(countA + 1)}>Count Button A</Button>
      <p>Clicked Button B {countB} times</p>
      <Button onClick={() => setCountB(countB + 1)}>Count Button B</Button>
      <p>Clicked Button C {countC} times</p>
      <Button onClick={() => setCountC(countC + 1)}>Count Button C</Button>
    </>
  );
};
export default Page;
