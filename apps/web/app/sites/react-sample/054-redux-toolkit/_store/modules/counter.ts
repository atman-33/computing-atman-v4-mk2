import { createSlice } from '@reduxjs/toolkit';

const counter = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    add(state, { type, payload }) {
      console.log(type, payload);
      return state + payload;
    },
    minus(state, { type, payload }) {
      console.log(type, payload);
      return state - payload;
    }
  }
});

// ---- Action Creator ---- //
const { add, minus } = counter.actions;
// ------------------------ //

export { add, minus };
export default counter.reducer;
