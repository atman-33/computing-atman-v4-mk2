const Child = ({ countB }: { countB: number }) => {
  console.log('%cChild render', 'color: red');
  return (
    <div>
      <div className="m-4 border-4 border-red-300 p-4">
        <h3>Child Component</h3>
        <p>Button B Clicked: {countB} times</p>
      </div>
    </div>
  );
};

export default Child;
