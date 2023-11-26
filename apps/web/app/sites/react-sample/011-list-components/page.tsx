const animals = ['cat', 'dog', 'bird'];

const Page = () => {
  return (
    <>
      <div className="mt-8">
        <h3>Operate array</h3>
        <br />
        <ul>
          {animals.map((animal) => {
            return <li key={animal}>Hello, {animal}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default Page;
