import { Button } from '@libs/web/ui-shadcn';
import { useMemo } from 'react';

const ChildMemo = ({ count, onClick }: { count: number; onClick: () => void }) => {
  console.log('%cChild render', 'color: red');

  return useMemo(
    () => {
      console.log('%cuseMemo', 'color: green');
      return (
        <div>
          <div className="m-4 border-4 border-red-300 p-4">
            <h3>Child Component</h3>
            <div>
              <Button onClick={onClick} className="m-4">
                Button B
              </Button>
              <span>Update child component</span>
            </div>
            <p>Button B Clicked: {count} times</p>
          </div>
        </div>
      );
    },
    // add state value and functions to the dependency array
    [count, onClick]
  );
};

ChildMemo.displayName = 'Child';

export default ChildMemo;
