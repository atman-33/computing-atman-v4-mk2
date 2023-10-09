'use client';

import { Button } from '@libs/web/ui-shadcn';

const Page = () => {
  const clickHandler = () => {
    alert('Clicked');
  };

  const clickHandler2 = () => {
    console.log('Clicked');
  };

  const hello = () => {
    return 'hello react';
  };

  console.log('hello react');

  return (
    <>
      <div className="m-4">
        <Button onClick={clickHandler}>Click me</Button>
      </div>
      <div>
        <Button onClick={clickHandler2} className="m-4">
          Click me
        </Button>
      </div>
      <div className="m-4">{hello()}</div>
    </>
  );
};

export default Page;
