'use client';

import { Provider } from 'react-redux';
import Counter from './_components/Counter';
import store from './_store';

const Page = () => {
  return (
    <>
      <div className="mt-8">
        <Provider store={store}>
          <Counter />
        </Provider>
      </div>
      <div className="mt-8">
        <h4>Note</h4>
        <li>Action Creator is functions to create action. </li>
      </div>
    </>
  );
};

export default Page;
