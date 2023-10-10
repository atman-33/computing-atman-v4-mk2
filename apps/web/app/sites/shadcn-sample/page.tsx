import { Button } from '@libs/web/ui-shadcn';
import Link from 'next/link';

export default function Page() {
  const samplePages = [
    '/sites/shadcn-sample/001-click-handler',
    '/sites/shadcn-sample/002-input',
    '/sites/shadcn-sample/003-use-state',
    '/sites/shadcn-sample/004-multiple-state',
    '/sites/shadcn-sample/005-state-object',
    '/sites/shadcn-sample/006-state-array',
    '/sites/shadcn-sample/007-state-and-props',
    '/sites/shadcn-sample/011-list-components',
    '/sites/shadcn-sample/012-list-and-filter',
    '/sites/shadcn-sample/013-input-textarea',
    '/sites/shadcn-sample/014-radio',
    '/sites/shadcn-sample/015-single-checkbox',
    '/sites/shadcn-sample/016-multi-checkbox',
    '/sites/shadcn-sample/017-select',
    '/sites/shadcn-sample/018-reminder'
  ];

  return (
    <>
      <div className="m-8">
        {samplePages.map((page) => {
          return (
            <div key={page} className="m-4">
              <Button asChild>
                <Link href={page}>{page}</Link>
              </Button>
            </div>
          );
        })}
      </div>
    </>
  );
}
