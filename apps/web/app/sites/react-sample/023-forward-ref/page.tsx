'use client';

import { Button, Input } from '@libs/web/ui-shadcn';
import { Ref, forwardRef, useImperativeHandle, useRef } from 'react';

interface Handler {
  setFocus(): void;
}

const InputForwardRef = forwardRef<Handler>((props, ref) => {
  const inputRef = useRef({} as HTMLInputElement);

  useImperativeHandle(ref, () => ({
    setFocus() {
      inputRef.current.focus();
    }
  }));

  return <Input type="text" ref={inputRef as Ref<HTMLInputElement>} />;
});
InputForwardRef.displayName = 'InputForwardRef';

const Page = () => {
  const ref = useRef({} as Handler);
  return (
    <>
      <div className="mt-8">
        <InputForwardRef ref={ref} />
        <Button className="mt-4" onClick={() => ref.current.setFocus()}>
          Focus Input
        </Button>
      </div>

      <div className="mt-8">
        <h4>Note</h4>
        <li>When passing a `ref` to a different component, use `forwardRef`.</li>
        <li>
          Try to avoid using `useRef` and `forwardRef` whenever possible. Use them sparingly, mainly
          for tasks like focusing input elements or controlling video playback, as they can
          complicate your code.
        </li>
      </div>
    </>
  );
};

export default Page;
