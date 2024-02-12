'use client';

import { Button } from '@libs/web/ui-shadcn';
import { useEffect, useLayoutEffect, useState } from 'react';

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
        <li>useLayoutEffect is executed before useEffect.</li>
        <li>
          useLayoutEffect is executed before the screen updates, allowing you to suppress component
          screen flickering.
        </li>
      </div>
    </>
  );
};

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    console.log('init');
    let intervalId: number | undefined = undefined;

    if (isRunning) {
      intervalId = window.setInterval(() => {
        console.log('timer start');
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      window.clearInterval(intervalId);
      console.log('end');
    };
  }, [isRunning]);

  useEffect(() => {
    // console.log('updated');
    document.title = 'counter: ' + time;
    window.localStorage.setItem('time-key', time.toString());

    return () => {
      // console.log('updated end');
    };
  }, [time]);

  useLayoutEffect(() => {
    const _time = parseInt(window.localStorage.getItem('time-key') ?? '');
    if (!isNaN(_time)) {
      setTime(_time);
    }
  }, []);

  const toggle = () => {
    setIsRunning((prev) => !prev);
  };

  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

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
