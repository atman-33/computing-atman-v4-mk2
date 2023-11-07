import { memo } from 'react';

// ---- use 2nd argument of memo case (minor case) ---- //
// function areEqual(prevProps: { countB: number }, nextProps: { countB: number }) {
//   return prevProps.countB === nextProps.countB;
// }

// const ChildMemo = memo(({ countB }: { countB: number }) => {
//   console.log('%cChild render', 'color: red');
//   return (
//     <div>
//       <div className="m-4 border-4 border-red-300 p-4">
//         <h3>Child Component</h3>
//         <p>Button B Clicked: {countB} times</p>
//       </div>
//     </div>
//   );
// }, areEqual);

// ---- Below is default case ---- //
const ChildMemo = memo(({ countB }: { countB: number }) => {
  console.log('%cChild render', 'color: red');
  return (
    <div>
      <div className="m-4 border-4 border-red-300 p-4">
        <h3>Child Component</h3>
        <p>Button B Clicked: {countB} times</p>
      </div>
    </div>
  );
});

ChildMemo.displayName = 'Child';

export default ChildMemo;
