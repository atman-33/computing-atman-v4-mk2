'use client';

import { Label, RadioGroup, RadioGroupItem } from '@libs/web/ui-shadcn';
import { useState } from 'react';

const Page = () => {
  const [value, setValue] = useState('');
  const RADIO_COLLECTION = ['apple', 'banana', 'cherry'];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeValue = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className="mt-8">
        <RadioGroup defaultValue="comfortable" onClick={(e) => changeValue(e)}>
          {RADIO_COLLECTION.map((item, index) => (
            <div key={item} className="flex items-center space-x-2">
              <RadioGroupItem value={item} id={index as unknown as string} />
              <Label htmlFor={index as unknown as string}>{item}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      <div>{value}</div>
    </>
  );
};

export default Page;
