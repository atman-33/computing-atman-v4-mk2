'use client';

import { useEffect, useState } from 'react';

const Page = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log('useEffect is called');
    window.setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    console.log('updated');
    document.title = 'counter: ' + time;
    window.localStorage.setItem('time-key', time.toString());
  }, [time]);

  return (
    <>
      <h3 className="mt-8">
        <time>{time}</time>
        <span> seconds elapsed</span>
      </h3>
      <div className="mt-8">
        <h4>Note</h4>
        <li>
          If useEffect is executed twice, you can set reactStrictMode to false in next.config.js.
        </li>
      </div>
    </>
  );
};

export default Page;
