'use client';

import { Input } from '@libs/web/ui-shadcn';
import { useState } from 'react';

const animals = ['cat', 'dog', 'bird', null, 'rat'];

const Page = () => {
  const [filterVal, setFilterVal] = useState('');

  return (
    <>
      <h3>Filter array</h3>
      <br />
      <Input type="text" onChange={(e) => setFilterVal(e.target.value)} value={filterVal} />
      <ul>
        {animals
          .filter((animal) => (animal ?? '').includes(filterVal))
          .map((animal) => {
            return (
              <li key={animal}>
                {animal ?? '(null or undefined)'}
                {animal === 'dog' && '🐶'}
              </li>
            );
            // return <li key={animal}>{animal + (animal === 'dog' ? '🐶' : '')}</li>;
          })}
      </ul>
    </>
  );
};

export default Page;
