import { createSlice } from '@reduxjs/toolkit';
import { asyncCount } from '../../_api/counter';

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

// ---- Redux Thunk ---- //
const addAsync = (payload?: number) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return async (dispatch: any, getState: any) => {
    const state = getState();
    console.log(state);
    const response = await asyncCount(payload);
    dispatch(add(response.data));
  };
};
// --------------------- //

export { add, addAsync, minus };
export default counter.reducer;
