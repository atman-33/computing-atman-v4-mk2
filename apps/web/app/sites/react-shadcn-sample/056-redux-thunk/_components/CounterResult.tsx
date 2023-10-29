import { useSelector } from 'react-redux';

const CounterResult = () => {
  // const state = useCounter();
  const count = useSelector<{ counter: { count: number } }, number>((state) => state.counter.count);

  return <h3>{count}</h3>;
};

export default CounterResult;
