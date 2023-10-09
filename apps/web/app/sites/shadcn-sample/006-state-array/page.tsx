'use client';

import { Button } from '@libs/web/ui-shadcn';
import { useState } from 'react';

const Page = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [nums, setNums] = useState(numArray);
  console.log(numArray);

  const shuffle = () => {
    const newNums = [...nums];
    console.log(nums === newNums);

    const value = newNums.pop();
    newNums.unshift(value ?? (null as unknown as number));
    console.log(newNums);

    setNums(newNums);
  };

  return (
    <>
      <h1>{nums}</h1>
      <Button onClick={shuffle}>shuffle</Button>
    </>
  );
};

export default Page;
