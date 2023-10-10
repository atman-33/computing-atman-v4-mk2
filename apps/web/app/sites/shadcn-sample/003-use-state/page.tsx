'use client';

import { Input } from '@libs/web/ui-shadcn';
import { useState } from 'react';

const Page = () => {
  const [val, setVal] = useState('');

  return (
    <>
      <div className="m-8">
        <Input type="text" onChange={(e) => setVal(e.target.value)} />={val}
      </div>{' '}
    </>
  );
};
export default Page;
