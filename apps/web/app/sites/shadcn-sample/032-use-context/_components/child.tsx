import GrandChild from './grand-child';

const Child = () => {
  return (
    <div className="border border-red-500 p-2">
      <h3>Child Component</h3>
      <GrandChild />
    </div>
  );
};

export default Child;
