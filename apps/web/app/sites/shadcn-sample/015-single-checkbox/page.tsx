'use client';

import { Checkbox } from '@libs/web/ui-shadcn';
import { useState } from 'react';

const Page = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckd = () => {
    setIsChecked((prevState) => {
      return !prevState;
    });
  };

  return (
    <>
      <div className="mt-8 flex items-center space-x-2">
        <Checkbox id="terms" onClick={toggleCheckd} checked={isChecked} />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
      <div className="mt-4">{isChecked ? 'ON!' : 'OFF!'}</div>
    </>
  );
};

export default Page;
