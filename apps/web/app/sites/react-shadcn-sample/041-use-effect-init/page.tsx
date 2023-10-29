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

  return (
    <>
      <h3 className="mt-8">
        <time>{time}</time>
        <span> seconds elapsed</span>
      </h3>
      <div className="mt-8">
        <h4>Note</h4>
        <li>
          When an empty array is passed to useEffect, the process is executed only at the beginning
          when the screen is first displayed.
        </li>
      </div>
    </>
  );
};

export default Page;
