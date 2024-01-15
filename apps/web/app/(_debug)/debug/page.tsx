/* eslint-disable @nx/enforce-module-boundaries */
import Link from '@/components/elements/Link';

const debugPages = [
  '/debug/animate-spin',
  '/debug/auth-login-sample',
  '/debug/auth-test-1',
  '/debug/auth-test-2',
  '/debug/combobox',
  '/debug/dnd-kit',
  '/debug/dynamic-routes',
  '/debug/hover-button',
  '/debug/loop-animation',
  '/debug/ok-cancel-dialog',
  '/debug/shadcn-ui',
  '/debug/tailwindcss-sample',
  '/login',
  '/signup',
  '/sites/booker'
];

const Page = () => {
  return (
    <div>
      {debugPages.map((page) => {
        return (
          <div key={page} className="m-2 rounded-md bg-purple-300 p-2">
            <Link href={page}>{page}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
