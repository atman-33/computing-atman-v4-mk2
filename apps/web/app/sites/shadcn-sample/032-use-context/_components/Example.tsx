import { createContext } from 'react';
import Child from './Child';

const MyContext = createContext('hello');

const Example = () => {
  return (
    <>
      <div className="mt-8">
        <Child></Child>
      </div>
    </>
  );
};

export { MyContext };
export default Example;
