import CounterButton from './CounterButton';
import CounterResult from './CounterResult';

const Counter = () => {
  return (
    <>
      <CounterResult />
      <CounterButton calcType={'+'} step={2} />
      <CounterButton calcType={'-'} step={2} />
      <CounterButton calcType={'+'} step={10} />
      <CounterButton calcType={'-'} step={10} />
    </>
  );
};

export default Counter;
