import { Button } from '@libs/web/ui-shadcn';
import { useDispatch } from 'react-redux';

const CounterButton = ({ calcType, step }: { calcType: '+' | '-'; step: number }) => {
  // const dispatch = useCounterDispatch();
  const dispatch = useDispatch();

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
