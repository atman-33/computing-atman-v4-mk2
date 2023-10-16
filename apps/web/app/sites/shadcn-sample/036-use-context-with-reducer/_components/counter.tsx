import CounterButton from './counter-button';
import CounterResult from './counter-result';

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
