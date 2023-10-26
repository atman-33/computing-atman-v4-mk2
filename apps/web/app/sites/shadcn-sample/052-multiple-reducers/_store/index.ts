import { createStore } from 'redux';

type ActionType = { type: '+' | '-'; step: number };

const initialState = 0;
const reducer = (state: number = initialState, action: ActionType) => {
  switch (action.type) {
    case '+':
      return state + action.step;
    case '-':
      return state - action.step;
    default:
      return state;
  }
};

export default createStore(reducer);
