import { useSelector } from 'react-redux';
import { RootState } from '../_store';

const CounterResult = () => {
  // const state = useCounter();
  const count = useSelector<RootState, number>((state) => state.counter.count);

  return <h3>{count}</h3>;
};

export default CounterResult;
