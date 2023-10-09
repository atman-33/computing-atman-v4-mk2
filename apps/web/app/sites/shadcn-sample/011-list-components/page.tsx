const animals = ['cat', 'dog', 'bird'];

const Page = () => {
  return (
    <>
      <h3>Operate array</h3>
      <br />
      <ul>
        {animals.map((animal) => {
          return <li key={animal}>Hello, {animal}</li>;
        })}
      </ul>
    </>
  );
};

export default Page;
