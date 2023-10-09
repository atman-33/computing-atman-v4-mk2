'use client';

import { Checkbox } from '@libs/web/ui-shadcn';
import { useState } from 'react';

const Page = () => {
  const [fruits, setFruits] = useState([
    { label: 'Apple', value: 100, checked: false },
    { label: 'Orange', value: 200, checked: false },
    { label: 'Banana', value: 300, checked: false }
  ]);

  const [sum, setSum] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    const newFruits = fruits.map((fruit) => {
      const newFruit = { ...fruit };
      if (newFruit.label === e.target.value) {
        newFruit.checked = !newFruit.checked;
      }

      return newFruit;
    });

    setFruits(newFruits);

    // let sumVal = 0;
    // newFruits
    //   .filter((fruit) => fruit.checked)
    //   .forEach((fruit) => {
    //     sumVal += fruit.value;
    //   });

    const sumVal = newFruits
      .filter((fruit) => fruit.checked)
      .reduce((sumVal, fruit) => sumVal + fruit.value, 0);
    setSum(sumVal);
  };

  return (
    <div className="mt-8">
      {fruits.map((fruit) => {
        return (
          <div key={fruit.label} className="my-2 flex items-center space-x-2">
            <Checkbox
              id={fruit.label}
              onClick={(e) => handleChange(e)}
              checked={fruit.checked}
              value={fruit.label}
            />
            <label
              htmlFor={fruit.label}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {fruit.label}: {fruit.value}
            </label>
          </div>
        );
      })}
      <div>Total: {sum}</div>
    </div>
  );
};

export default Page;
