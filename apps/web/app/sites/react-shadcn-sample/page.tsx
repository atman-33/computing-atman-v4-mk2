import { Button } from '@libs/web/ui-shadcn';
import Link from 'next/link';

export default function Page() {
  const samplePages = [
    '/sites/react-shadcn-sample/001-click-handler',
    '/sites/react-shadcn-sample/002-input',
    '/sites/react-shadcn-sample/003-use-state',
    '/sites/react-shadcn-sample/004-multiple-state',
    '/sites/react-shadcn-sample/005-state-object',
    '/sites/react-shadcn-sample/006-state-array',
    '/sites/react-shadcn-sample/007-state-and-props',
    '/sites/react-shadcn-sample/011-list-components',
    '/sites/react-shadcn-sample/012-list-and-filter',
    '/sites/react-shadcn-sample/013-input-textarea',
    '/sites/react-shadcn-sample/014-radio',
    '/sites/react-shadcn-sample/015-single-checkbox',
    '/sites/react-shadcn-sample/016-multi-checkbox',
    '/sites/react-shadcn-sample/017-select',
    '/sites/react-shadcn-sample/018-reminder',
    '/sites/react-shadcn-sample/021-dialog',
    '/sites/react-shadcn-sample/022-use-ref',
    '/sites/react-shadcn-sample/023-forward-ref',
    '/sites/react-shadcn-sample/031-use-state-to-use-reducer',
    '/sites/react-shadcn-sample/032-use-context',
    '/sites/react-shadcn-sample/033-use-context-with-state',
    '/sites/react-shadcn-sample/034-context-file',
    '/sites/react-shadcn-sample/035-context-file-render',
    '/sites/react-shadcn-sample/036-use-context-with-reducer',
    '/sites/react-shadcn-sample/041-use-effect-init',
    '/sites/react-shadcn-sample/042-use-effect-update',
    '/sites/react-shadcn-sample/043-use-effect-cleanup',
    '/sites/react-shadcn-sample/044-use-layout-effect',
    '/sites/react-shadcn-sample/045-use-effect-click',
    '/sites/react-shadcn-sample/046-custom-hook',
    '/sites/react-shadcn-sample/051-redux-no-rtk',
    '/sites/react-shadcn-sample/052-multiple-reducers',
    '/sites/react-shadcn-sample/053-action-creator',
    '/sites/react-shadcn-sample/054-redux-toolkit',
    '/sites/react-shadcn-sample/055-redux-toolkit-immer',
    '/sites/react-shadcn-sample/056-redux-thunk',
    '/sites/react-shadcn-sample/057-redux-middleware',
    '/sites/react-shadcn-sample/061-objectis',
    '/sites/react-shadcn-sample/062-child-rerender',
    '/sites/react-shadcn-sample/063-memo',
    '/sites/react-shadcn-sample/064-use-callback',
    '/sites/react-shadcn-sample/065-use-callback-deps',
    '/sites/react-shadcn-sample/066-use-memo',
    '/sites/react-shadcn-sample/067-use-transition',
    '/sites/react-shadcn-sample/068-use-deferred-value',
    '/sites/react-shadcn-sample/071-api-nextjs',
    '/sites/react-shadcn-sample/072-graphql-get-request',
    '/sites/react-shadcn-sample/073-graphql-recoil',
    '/sites/react-shadcn-sample/074-graphql-recoil-2',
    '/sites/react-shadcn-sample/081-recoil'
  ];

  return (
    <>
      <div className="m-8 grid grid-cols-3 gap-4">
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
