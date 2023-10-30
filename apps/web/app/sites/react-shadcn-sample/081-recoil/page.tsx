'use client';

import { RecoilRoot } from 'recoil';
import Counter from './_components/Counter';

const Page = () => {
  return (
    <>
      <div className="mt-8">
        <RecoilRoot>
          <Counter />
        </RecoilRoot>
      </div>
      <div className="mt-8">
        <h4>Note</h4>
        <li>...</li>
      </div>
    </>
  );
};

export default Page;
