const initialState = 0;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = (
  state: number = initialState,
  { type, payload }: { type: string; payload: number }
) => {
  switch (type) {
    case 'counter/+':
      return state + payload;
    case 'counter/-':
      return state - payload;
    default:
      return state;
  }
};

// ---- Action Creator ---- //
const add = (payload: number) => {
  return {
    type: 'counter/+',
    payload
  };
};

const minus = (payload: number) => {
  return {
    type: 'counter/-',
    payload
  };
};
// ------------------------ //

export { add, minus, reducer };
