'use client';

import { Provider } from 'react-redux';
import Counter from './_components/Counter';
import store from './_store';

// redux middleware
// const reduxMiddleware = (store: any) => {
//   return (next: any) => {
//     return (action: any) => {
//       // process beffore all dispatch
//       // this store is before doing action
//       // (`store.getState()` to get state)
//       next(action);
//       // this store is after doing action
//     };
//   };
// };

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
        <li>Middleware is executed before action is dispatched.</li>
      </div>
    </>
  );
};

export default Page;
