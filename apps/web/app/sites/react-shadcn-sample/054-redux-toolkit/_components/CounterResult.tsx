import { useSelector } from 'react-redux';

const CounterResult = () => {
  // const state = useCounter();
  const state = useSelector<{ counter: number }, { counter: number }>((state) => state);
  console.log(state);

  return <h3>{state.counter}</h3>;
};

export default CounterResult;
