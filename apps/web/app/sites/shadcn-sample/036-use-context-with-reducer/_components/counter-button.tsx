import { Button } from '@libs/web/ui-shadcn';
import { useCounterDispatch } from '../_context/counter-context';

const CounterButton = ({ calcType, step }: { calcType: '+' | '-'; step: number }) => {
  const dispatch = useCounterDispatch();

  const clickHandler = () => {
    dispatch({ type: calcType, step });
  };

  return (
    <Button onClick={clickHandler}>
      {calcType}
      {step}
    </Button>
  );
};

export default CounterButton;
