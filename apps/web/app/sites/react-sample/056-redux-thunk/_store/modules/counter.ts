import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { asyncCount } from '../../_api/counter';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0, status: '' },
  reducers: {
    add(state, { type, payload }) {
      // In redux-toolkit, state is immutable. And return is not needed.
      state.count = state.count + payload;
    },
    minus(state, { type, payload }) {
      state.count = state.count - payload;
    }
  },
  // ---- AsyncThunk ---- //
  extraReducers: (builder) => {
    builder
      .addCase(addAsyncWithStatus.pending, (state) => {
        state.status = 'Loading...';
      })
      .addCase(addAsyncWithStatus.fulfilled, (state, action) => {
        state.status = 'Success';
        state.count = state.count + action.payload;
      })
      .addCase(addAsyncWithStatus.rejected, (state) => {
        state.status = 'Failed';
      });
  }
});

// ---- Action Creator ---- //
const { add, minus } = counterSlice.actions;
// ------------------------ //

// ---- Redux Thunk ---- //
const addAsyncWithStatus = createAsyncThunk(
  'counter/asyncCount',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async (payload: any) => {
    const response = await asyncCount(payload);
    return response.data;
  }
);
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

export { counterSlice };
export const counterActions = { add, minus, addAsyncWithStatus, addAsync };
