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
          Be careful to ensure that the __typename is not included in the arguments of the API, as
          it may be present in the automatically generated GraphQL types.
        </li>
      </div>
    </>
  );
};

export default Page;
