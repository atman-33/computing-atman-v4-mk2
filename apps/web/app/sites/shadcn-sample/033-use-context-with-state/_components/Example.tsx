import { Dispatch, SetStateAction, createContext, useState } from 'react';
import Child from './Child';
import OtherChild from './OtherChild';

const MyContext = createContext(
  [] as unknown as [number | undefined, Dispatch<SetStateAction<number>>]
);

const Example = () => {
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
    </>
  );
};

export { MyContext };
export default Example;
