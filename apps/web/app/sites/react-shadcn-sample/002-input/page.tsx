'use client';

import { Input, Label } from '@libs/web/ui-shadcn';

const Page = () => {
  return (
    <>
      <div className="m-8">
        <h3 className="m-4">Confirm console.</h3>
        <Label>
          Input event:
          <Input
            type="text"
            onChange={() => console.log('onChange detection')}
            onBlur={() => console.log('onBlur detection')}
            onFocus={() => console.log('onFocus detection')}
          ></Input>
        </Label>

        <Label>
          Get input data:
          <Input type="text" onChange={(e) => console.log(e.target.value)}></Input>
        </Label>

        <div
          className="m-8 bg-purple-400 p-2 hover:cursor-pointer"
          onMouseEnter={() => console.log('Mouse enter')}
          onMouseLeave={() => console.log('Mouse leave')}
        >
          Please hover me
        </div>
      </div>
    </>
  );
};
export default Page;
