'use client';

import HoverEditButton from './_components/HoverEditButton';

const dummy = [
  {
    id: 1,
    name: 'test-1',
    email: 'abc'
  },
  {
    id: 2,
    name: 'test-2',
    email: 'def'
  },
  {
    id: 3,
    name: 'test-3',
    email: 'ghi'
  }
];

const Page = () => {
  const handleClick = (i: number) => {
    console.log(`clicked ${i}`);
  };

  return (
    <>
      <div>
        {dummy.map((d, i) => {
          return (
            <HoverEditButton key={i} clickHandler={() => handleClick(d.id)}>
              <div className="m-2 flex h-40 w-full items-center gap-4 rounded-lg bg-blue-200 p-8">
                <div>{d.name}</div>
                <div>{d.email}</div>
              </div>
            </HoverEditButton>
          );
        })}
      </div>
    </>
  );
};

export default Page;
