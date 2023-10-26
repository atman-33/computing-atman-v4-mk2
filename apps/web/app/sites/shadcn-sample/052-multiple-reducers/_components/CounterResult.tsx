import { useSelector } from 'react-redux';

const CounterResult = () => {
  // const state = useCounter();
  const state = useSelector<number, number>((state) => state);

  return <h3>{state}</h3>;
};

export default CounterResult;
