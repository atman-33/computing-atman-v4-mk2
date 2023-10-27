import { add, addAsync, minus } from '../_store/modules/counter';
import CounterButton from './CounterButton';
import CounterResult from './CounterResult';

const Counter = () => {
  return (
    <>
      <CounterResult />
      <CounterButton calcType={'+'} step={2} actionCreator={add} />
      <CounterButton calcType={'-'} step={2} actionCreator={minus} />
      <CounterButton calcType={'async(+)'} step={2} actionCreator={addAsync} />
    </>
  );
};

export default Counter;
