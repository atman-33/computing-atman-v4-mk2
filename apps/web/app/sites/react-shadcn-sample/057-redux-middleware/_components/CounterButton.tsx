import { Button } from '@libs/web/ui-shadcn';
import { useDispatch } from 'react-redux';

type Props = {
  calcType: '+' | '-' | 'async(+)';
  step: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  actionCreator: any;
};

const CounterButton = ({ calcType, step, actionCreator }: Props) => {
  // const dispatch = useCounterDispatch();
  const dispatch = useDispatch();

  const clickHandler = () => {
    // const action = calcType === '+' ? add(step) : minus(step);
    dispatch(actionCreator(step));
  };

  return (
    <Button onClick={clickHandler}>
      {calcType}
      {step}
    </Button>
  );
};

export default CounterButton;
