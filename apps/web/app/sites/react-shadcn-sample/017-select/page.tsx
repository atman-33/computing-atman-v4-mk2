'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@libs/web/ui-shadcn';
import { useState } from 'react';

const Page = () => {
  const [selected, setSelected] = useState('Banana');

  const OPTIONS = ['Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple'];

  return (
    <div className="mt-8 grid grid-cols-12">
      <div className="col-span-6">
        <Select value={selected} onValueChange={(value) => setSelected(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              {OPTIONS.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="col-span-6">Selected: {selected}</div>
    </div>
  );
};

export default Page;
