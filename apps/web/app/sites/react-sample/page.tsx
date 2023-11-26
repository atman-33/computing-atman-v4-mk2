import { Button } from '@libs/web/ui-shadcn';
import Link from 'next/link';

export default function Page() {
  const samplePages = [
    '/sites/react-sample/001-click-handler',
    '/sites/react-sample/002-input',
    '/sites/react-sample/003-use-state',
    '/sites/react-sample/004-multiple-state',
    '/sites/react-sample/005-state-object',
    '/sites/react-sample/006-state-array',
    '/sites/react-sample/007-state-and-props',
    '/sites/react-sample/011-list-components',
    '/sites/react-sample/012-list-and-filter',
    '/sites/react-sample/013-input-textarea',
    '/sites/react-sample/014-radio',
    '/sites/react-sample/015-single-checkbox',
    '/sites/react-sample/016-multi-checkbox',
    '/sites/react-sample/017-select',
    '/sites/react-sample/018-reminder',
    '/sites/react-sample/021-dialog',
    '/sites/react-sample/022-use-ref',
    '/sites/react-sample/023-forward-ref',
    '/sites/react-sample/031-use-state-to-use-reducer',
    '/sites/react-sample/032-use-context',
    '/sites/react-sample/033-use-context-with-state',
    '/sites/react-sample/034-context-file',
    '/sites/react-sample/035-context-file-render',
    '/sites/react-sample/036-use-context-with-reducer',
    '/sites/react-sample/041-use-effect-init',
    '/sites/react-sample/042-use-effect-update',
    '/sites/react-sample/043-use-effect-cleanup',
    '/sites/react-sample/044-use-layout-effect',
    '/sites/react-sample/045-use-effect-click',
    '/sites/react-sample/046-custom-hook',
    '/sites/react-sample/051-redux-no-rtk',
    '/sites/react-sample/052-multiple-reducers',
    '/sites/react-sample/053-action-creator',
    '/sites/react-sample/054-redux-toolkit',
    '/sites/react-sample/055-redux-toolkit-immer',
    '/sites/react-sample/056-redux-thunk',
    '/sites/react-sample/057-redux-middleware',
    '/sites/react-sample/061-objectis',
    '/sites/react-sample/062-child-rerender',
    '/sites/react-sample/063-memo',
    '/sites/react-sample/064-use-callback',
    '/sites/react-sample/065-use-callback-deps',
    '/sites/react-sample/066-use-memo',
    '/sites/react-sample/067-use-transition',
    '/sites/react-sample/068-use-deferred-value',
    '/sites/react-sample/071-api-nextjs',
    '/sites/react-sample/072-graphql-get-request',
    '/sites/react-sample/073-graphql-other-method-recoil',
    '/sites/react-sample/074-graphql-other-method-recoil-2',
    '/sites/react-sample/075-dynamic-import',
    '/sites/react-sample/076-react-lazy',
    '/sites/react-sample/081-recoil'
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
