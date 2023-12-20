'use client';

// eslint-disable-next-line @nx/enforce-module-boundaries
import OkCancelDialog from '@/components/elements/OkCancelDialog';

const Page = () => {
  const clickHandler = () => {
    console.log('Clicked OK');
  };

  return (
    <>
      <OkCancelDialog title="Title" description="Description" clickHandler={clickHandler}>
        <button>Open Dialog</button>
      </OkCancelDialog>
    </>
  );
};

export default Page;
