import { useCounter } from '../_context/counter-context';

const CounterResult = () => {
  const state = useCounter();

  return <h3>{state}</h3>;
};

export default CounterResult;
