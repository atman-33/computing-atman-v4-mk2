'use client';

import { Input } from '@libs/web/ui-shadcn';
import { ChangeEvent, useDeferredValue, useState } from 'react';

const generateDummyItem = (num: number) => {
  return new Array(num).fill(null).map((item, index) => {
    return `item ${index}`;
  });
};

const dummyItems = generateDummyItem(10000);

const Page = () => {
  // startTransition: down priority of functions
  // isPending: true when startTransition is proccesing
  // const [isPending, startTransition] = useTransition();
  const [filterVal, setFilterVal] = useState('');

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // functions of useTransition down priority
    // startTransition(() => {
    //   setFilterVal(e.target.value);
    // });
    setFilterVal(e.target.value);
  };

  const filterdItems = dummyItems
    .filter((item) => {
      if (filterVal === '') return true;
      return item.includes(filterVal);
    })
    .map((item) => <li key={item}>{item}</li>);

  const deferredItems = useDeferredValue(filterdItems);

  return (
    <>
      <div className="mt-8">
        <Input type="text" onChange={changeHandler} />
        {/* {isPending && <div>Loading...</div>} */}
        <ul className="m-4">{deferredItems}</ul>
      </div>
      <div className="mt-8">
        <h4>Note</h4>
        <li>useTransition can manage transitions to improve performance.</li>
        <li>startTransition: down priority of functions</li>
        <li>isPending: true when startTransition is proccesing</li>
        <li>
          For performance improvements, it is recommended to use useMemo and useCallback instead of
          useTransition whenever possible. Consider using useTransition only when useMemo and
          useCallback do not provide the desired improvements.
        </li>
      </div>
    </>
  );
};

export default Page;
