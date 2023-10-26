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
    '/sites/shadcn-sample/018-reminder',
    '/sites/shadcn-sample/021-dialog',
    '/sites/shadcn-sample/022-use-ref',
    '/sites/shadcn-sample/023-forward-ref',
    '/sites/shadcn-sample/031-use-state-to-use-reducer',
    '/sites/shadcn-sample/032-use-context',
    '/sites/shadcn-sample/033-use-context-with-state',
    '/sites/shadcn-sample/034-context-file',
    '/sites/shadcn-sample/035-context-file-render',
    '/sites/shadcn-sample/036-use-context-with-reducer',
    '/sites/shadcn-sample/041-use-effect-init',
    '/sites/shadcn-sample/042-use-effect-update',
    '/sites/shadcn-sample/043-use-effect-cleanup',
    '/sites/shadcn-sample/044-use-layout-effect',
    '/sites/shadcn-sample/045-use-effect-click',
    '/sites/shadcn-sample/046-custom-hook',
    '/sites/shadcn-sample/051-redux-no-rtk',
    '/sites/shadcn-sample/052-multiple-reducers',
    '/sites/shadcn-sample/053-action-creator',
    '/sites/shadcn-sample/054-redux-toolkit'
  ];

  return (
    <>
      <div className="m-8 grid grid-cols-2 gap-4">
        {samplePages.map((page) => {
          return (
            <div key={page} className="m-4">
              <Button asChild className="h-auto">
                <Link href={page}>{page}</Link>
              </Button>
            </div>
          );
        })}
      </div>
    </>
  );
}
