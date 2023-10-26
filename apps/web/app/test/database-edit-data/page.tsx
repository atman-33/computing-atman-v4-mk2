'use client';

import { GetTestMongoosesDocument } from '@libs/web/data-access-graphql';
import { Button } from '@libs/web/ui-shadcn';
import { gql } from 'apps/web/lib/graphql-client';
import { useRef } from 'react';

export default async function Page() {
  const textRef = useRef<HTMLInputElement>(null);
  const valueRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log('Input Text:', textRef.current?.value);
    console.log('Input Value:', valueRef.current?.value);
  };

  const records = (
    await gql.query({
      query: GetTestMongoosesDocument
    })
  ).data;

  return (
    <div className="mt-8 grid grid-cols-12 gap-8">
      <table className="col-span-8 min-w-full text-left">
        <thead className="border-b font-medium dark:border-neutral-500">
          <tr>
            <th className="px-6 py-4">_id</th>
            <th className="px-6 py-4">text</th>
            <th className="px-6 py-4">value</th>
          </tr>
        </thead>
        <tbody>
          {records.testMongooses.map((record) => {
            return (
              <tr key={record._id}>
                <td className="whitespace-nowrap px-6 py-4">{record._id}</td>
                <td className="whitespace-nowrap px-6 py-4">{record.text}</td>
                <td className="whitespace-nowrap px-6 py-4">{record.value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="col-span-4">
        <form onSubmit={handleSubmit}>
          <p className="my-5 text-2xl font-bold">Input and Save</p>
          <div className="mb-6 md:flex md:items-center">
            <div className="mr-4">
              <label htmlFor="inputText">Text:</label>
              <input type="text" id="inputText" ref={textRef!} />
            </div>
            <div className="mr-4">
              <label htmlFor="inputValue">Value:</label>
              <input type="number" id="inputValue" ref={valueRef!} />
            </div>
          </div>
          <Button className="bg-blue-600 text-white dark:bg-neutral-600" type="submit">
            Add
          </Button>
        </form>
      </div>
    </div>
  );
}
