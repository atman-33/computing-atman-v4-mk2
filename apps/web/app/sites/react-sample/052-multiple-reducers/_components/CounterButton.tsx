import { Button } from '@libs/web/ui-shadcn';
import { useDispatch } from 'react-redux';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CounterButton = ({ calcType, step }: { calcType: any; step: number }) => {
  // const dispatch = useCounterDispatch();
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch({ type: 'counter2/' + calcType, step });
  };

  return (
    <Button onClick={clickHandler}>
      {calcType}
      {step}
    </Button>
  );
};

export default CounterButton;
