import { useSelector } from 'react-redux';

const CounterResult = () => {
  // const state = useCounter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const state: any = useSelector((state) => state);
  console.log(state);

  return (
    <h3>
      {state.counter}:{state.counter2}
    </h3>
  );
};

export default CounterResult;
