import { useRecoilState } from 'recoil';
import { countState } from '../_stores/counterAtom';

const Counter = () => {
  const [count, setCount] = useRecoilState(countState);

  return <div onClick={() => setCount((c) => c + 1)}>Clicked: {count}</div>;
};

export default Counter;
