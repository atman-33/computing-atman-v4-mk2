import { Button } from '@libs/web/ui-shadcn';
import { useDispatch } from 'react-redux';
import { add, minus } from '../_store/modules/counter';

const CounterButton = ({ calcType, step }: { calcType: '+' | '-'; step: number }) => {
  // const dispatch = useCounterDispatch();
  const dispatch = useDispatch();

  const clickHandler = () => {
    const action = calcType === '+' ? add(step) : minus(step);
    console.log(action);
    dispatch(action);
  };

  return (
    <Button onClick={clickHandler}>
      {calcType}
      {step}
    </Button>
  );
};

export default CounterButton;
