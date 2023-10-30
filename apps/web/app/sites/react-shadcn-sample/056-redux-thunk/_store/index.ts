import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './modules/counter';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
    // If you need to add more reducers, you can add them here
    // log: log.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
