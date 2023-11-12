import Todo from './_components/Todo';

const Page = () => {
  return (
    <>
      <div className="mt-8">
        <Todo />
      </div>
      <div className="mt-8">
        <h4>Note</h4>
        <li>
          On the component side, call the atom from the stores directly through a custom hook.
        </li>
        <li>Add business logic to the hooks.</li>
      </div>
    </>
  );
};

export default Page;
