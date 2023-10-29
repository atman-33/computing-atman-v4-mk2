import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './modules/counter';

const rootReducer = combineReducers({
  counter: counterSlice.reducer
  // If you need to add more reducers, you can add them here
  // log: log.reducer
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
    // If you need to add more reducers, you can add them here
    // log: log.reducer
  }
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
