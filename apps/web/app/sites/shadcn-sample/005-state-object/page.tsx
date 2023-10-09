'use client';

import { Button, Input } from '@libs/web/ui-shadcn';
import { ChangeEvent, useState } from 'react';

const Page = () => {
  const personObj = { name: 'Tom', age: 18 };
  const [person, setPerson] = useState(personObj);

  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    setPerson({ ...person, name: e.target.value });
  };

  const changeAge = (e: ChangeEvent<HTMLInputElement>) => {
    setPerson({ ...person, age: e.target.value as unknown as number });
  };

  const reset = () => {
    setPerson({ name: '', age: null as unknown as number });
  };

  return (
    <>
      <h3>Name: {person.name}</h3>
      <h3>Age: {person.age}</h3>
      <Input type="text" onChange={(e) => changeName(e)} value={person.name}></Input>
      <Input type="number" onChange={(e) => changeAge(e)} value={person.age}></Input>
      <div>
        <Button onClick={reset}>Reset</Button>
      </div>
    </>
  );
};
export default Page;
