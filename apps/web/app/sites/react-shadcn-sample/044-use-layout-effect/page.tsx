'use client';

import { Button } from '@libs/web/ui-shadcn';
import { useEffect, useLayoutEffect, useState } from 'react';
import Random from './Random';

const Page = () => {
  const [isDisplayed, setIsDisplayed] = useState(true);

  return (
    <>
      {isDisplayed && <Timer />}
      <div>
        <Random />
      </div>
      <Button className="my-2" onClick={() => setIsDisplayed((prev) => !prev)}>
        Toggle
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

  useEffect(() => {
    console.log('init');
    let intervalId: number | undefined = undefined;
    intervalId = window.setInterval(() => {
      console.log('interval called');
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
      console.log('end');
    };
  }, []);

  useEffect(() => {
    console.log('updated');
    document.title = 'counter: ' + time;
    window.localStorage.setItem('time-key', time.toString());

    return () => {
      console.log('updated end');
    };
  }, [time]);

  useLayoutEffect(() => {
    const _time = parseInt(window.localStorage.getItem('time_key') ?? '');
    if (!isNaN(_time)) {
      setTime(_time);
    }
  }, []);

  return (
    <>
      <h3 className="mt-8">
        <time>{time}</time>
        <span> seconds elapsed</span>
      </h3>
    </>
  );
};

export default Page;
