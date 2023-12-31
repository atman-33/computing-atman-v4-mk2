import { configureStore } from '@reduxjs/toolkit';
import logger from './middleware/logger';
import { counterSlice } from './modules/counter';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
    // If you need to add more reducers, you can add them here
    // log: log.reducer
  },
  // middleware: (getDefaultMiddleware) => {
  //   const middlewares = getDefaultMiddleware();
  //   console.log(middlewares);
  //   const newMiddlewares = middlewares.concat(logger);
  //   return newMiddlewares;
  // }
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
