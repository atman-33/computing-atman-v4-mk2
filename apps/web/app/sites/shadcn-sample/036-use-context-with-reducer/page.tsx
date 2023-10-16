'use client';

import Counter from './_components/counter';
import { CounterProvider } from './_context/counter-context';

const Page = () => {
  return (
    <>
      <div className="mt-8">
        <CounterProvider>
          <Counter />
        </CounterProvider>
      </div>
      <div className="mt-8">
        <h4>Note</h4>
        <li>Summaraize useContext and useReducer is better than useContext only. </li>
      </div>
    </>
  );
};

export default Page;
