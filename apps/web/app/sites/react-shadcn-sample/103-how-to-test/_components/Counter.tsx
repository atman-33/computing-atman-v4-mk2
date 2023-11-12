import { useRecoilState } from 'recoil';
import { countState } from '../_stores/counterAtom';

const Counter = () => {
  const [count, setCount] = useRecoilState(countState);

  return (
    <div>
      <h2>Counup Test</h2>
      <div>
        <span>Current Count:{count}</span>
      </div>
      <div>
        <button onClick={() => setCount((c) => c + 1)}>Count up</button>
      </div>
    </div>
  );
};

export default Counter;
