import { combineReducers, createStore } from 'redux';
import { reducer } from './modules/counter';

const reducers = combineReducers({
  counter: reducer
});

export default createStore(reducers);
