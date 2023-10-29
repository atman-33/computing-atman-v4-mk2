'use client';

import { Provider } from 'react-redux';
import Counter from './_components/Counter';
import store from './_store';

// How to use redux-thunk
// const thunkFunction = (payload) => {
//   return (dispatch, getState) => {
//     Side Effect...
//   }
// }

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
        <li>If you use side effect in Redux, write it in middleware(redux-thunk). </li>
        <li>The arguments of configureStore can not use combineReducers. </li>
      </div>
    </>
  );
};

export default Page;
