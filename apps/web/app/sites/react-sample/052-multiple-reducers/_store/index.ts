import { combineReducers, createStore } from 'redux';

const initialState = 0;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = (state: number = initialState, action: any) => {
  console.log(action.type);
  switch (action.type) {
    case 'counter/+':
      return state + action.step;
    case 'counter/-':
      return state - action.step;
    default:
      return state;
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer2 = (state: number = initialState, action: any) => {
  console.log(action.type);
  switch (action.type) {
    case 'counter2/+':
      return state + action.step;
    case 'counter2/-':
      return state - action.step;
    default:
      return state;
  }
};

const reducers = combineReducers({
  counter: reducer,
  counter2: reducer2
});

export default createStore(reducers);
