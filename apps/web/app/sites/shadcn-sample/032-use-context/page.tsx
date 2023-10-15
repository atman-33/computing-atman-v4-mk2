'use client';

import { createContext } from 'react';
import Child from './_components/child';

const MyContext = createContext('hello');

const Page = () => {
  return (
    <>
      <div className="mt-8">
        <Child></Child>
      </div>
      <div className="mt-8">
        <h4>Note</h4>
        <li>useContext can be used to share data between components.</li>
      </div>
    </>
  );
};

export { MyContext };
export default Page;
