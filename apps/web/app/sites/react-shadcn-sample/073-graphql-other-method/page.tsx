'use client';

import { RecoilRoot } from 'recoil';
import Todos from './_components/Todos';

const Page = () => {
  return (
    <div className="mt-8">
      <RecoilRoot>
        <Todos />
      </RecoilRoot>
    </div>
  );
};

export default Page;
