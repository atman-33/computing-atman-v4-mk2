'use client';

import { Dispatch, SetStateAction, createContext, useState } from 'react';
import Child from './_components/child';
import OtherChild from './_components/other-child';

const MyContext = createContext(
  [] as unknown as [number | undefined, Dispatch<SetStateAction<number>>]
);

const Page = () => {
  const [state, setState] = useState(0);

  return (
    <>
      <MyContext.Provider value={[state, setState]}>
        <div className="mt-8">
          <Child />
          <hr className="my-4" />
          <OtherChild />
        </div>
      </MyContext.Provider>
      <div className="mt-8">
        <h4>Note</h4>
        <li>The state and setState of Context Provider can used by Child Components.</li>
      </div>
    </>
  );
};

export { MyContext };
export default Page;
