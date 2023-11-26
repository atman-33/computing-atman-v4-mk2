import { useSelector } from 'react-redux';
import { RootState } from '../_store';
import { counterActions } from '../_store/modules/counter';
import CounterButton from './CounterButton';
import CounterResult from './CounterResult';

const Counter = () => {
  const status = useSelector<RootState, string>((state) => state.counter.status);

  return (
    <>
      <CounterResult />
      <CounterButton calcType={'+'} step={2} actionCreator={counterActions.add} />
      <CounterButton calcType={'-'} step={2} actionCreator={counterActions.minus} />
      <CounterButton
        calcType={'async(+)'}
        step={2}
        actionCreator={counterActions.addAsyncWithStatus}
      />
      <h3>{status}</h3>
    </>
  );
};

export default Counter;
