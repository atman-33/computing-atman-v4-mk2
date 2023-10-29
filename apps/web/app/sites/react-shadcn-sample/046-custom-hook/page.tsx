'use client';

import { Button } from '@libs/web/ui-shadcn';
import { useState } from 'react';
import useTimer from './useTimer';

const Page = () => {
  const [isDisplayed, setIsDisplayed] = useState(true);

  return (
    <>
      {isDisplayed && <Timer />}
      <Button className="my-2" onClick={() => setIsDisplayed((prev) => !prev)}>
        {isDisplayed ? 'Not Displayed' : 'Displayed'}
      </Button>
      <div className="mt-8">
        <h4>Note</h4>
        <li>A custom hook is a function that uses React hooks like `useState` internally.</li>
        <li>{`Custom hooks are named functions with "use" at the beginning of their names.`}</li>
      </div>
    </>
  );
};

const Timer = () => {
  const { time, isRunning, toggle, reset } = useTimer();

  return (
    <>
      <h3 className="mt-8">
        <time>{time}</time>
        <span> seconds elapsed</span>
      </h3>
      <div>
        <Button onClick={toggle}>{isRunning ? 'Pause' : 'Start'}</Button>
        <Button onClick={reset}>Reset</Button>
      </div>
    </>
  );
};

export default Page;
