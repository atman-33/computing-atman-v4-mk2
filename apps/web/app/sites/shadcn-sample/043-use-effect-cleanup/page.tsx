'use client';

import { Button } from '@libs/web/ui-shadcn';
import { useEffect, useState } from 'react';

const Page = () => {
  const [isDisplayed, setIsDisplayed] = useState(true);

  return (
    <>
      {isDisplayed && <Timer />}
      <Button className="my-2" onClick={() => setIsDisplayed((prev) => !prev)}>
        Toggle
      </Button>
      <div className="mt-8">
        <h4>Note</h4>
        <li>
          The return inside useEffect is used to write the logic that will be called when the
          component is unmounted.
        </li>
        <li>
          Be cautious when using window.setInterval, as it can lead to memory leaks if cleanup is
          not performed.
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
