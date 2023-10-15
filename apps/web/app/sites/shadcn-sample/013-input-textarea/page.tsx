'use client';

import { Button, Input, Label, Textarea } from '@libs/web/ui-shadcn';
import { useState } from 'react';

const Page = () => {
  const [val, setVal] = useState('');
  const clearVal = () => setVal('');

  return (
    <>
      <div className="mt-8">
        <Label htmlFor="456">Label</Label>
        <div>
          <Input
            className="my-1"
            id="123"
            placeholder="Hello"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <Textarea
            className="my-1"
            id="456"
            placeholder="Hello"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
        </div>
        <h3>{val}</h3>

        <Button onClick={clearVal}>Clear</Button>
      </div>
    </>
  );
};

export default Page;
