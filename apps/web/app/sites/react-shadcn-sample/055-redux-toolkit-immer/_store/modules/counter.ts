import { createSlice } from '@reduxjs/toolkit';

const counter = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    add(state, { type, payload }) {
      // In redux-toolkit, state is immutable. And return is not needed.
      state.count = state.count + payload;
      // const newState = { ...state };
      // newState.count = state.count + payload;
      // return newState;
    },
    minus(state, { type, payload }) {
      state.count = state.count - payload;
      // const newState = { ...state };
      // newState.count = state.count - payload;
      // return newState;
    }
  }
});

// ---- Action Creator ---- //
const { add, minus } = counter.actions;
// ------------------------ //

export { add, minus };
export default counter.reducer;
