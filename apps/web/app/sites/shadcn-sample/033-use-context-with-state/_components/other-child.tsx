import { Button } from '@libs/web/ui-shadcn';
import { useContext } from 'react';
import { MyContext } from '../page';

const Child = () => {
  const [state, setState] = useContext(MyContext);

  const clickHandler = () => {
    setState((prev) => prev + 1);
  };

  return (
    <div className="border border-red-500 p-2">
      <h3>Other Child Component</h3>
      <Button onClick={clickHandler}>+</Button>
      <h3>{state}</h3>
    </div>
  );
};

export default Child;
