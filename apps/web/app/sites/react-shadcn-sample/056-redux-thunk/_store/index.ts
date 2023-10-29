import { configureStore } from '@reduxjs/toolkit';
import reducer from './modules/counter';

export default configureStore({
  reducer: {
    counter: reducer
  }
});
