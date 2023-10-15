import { HomeIcon } from '@/components/icons/icons';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-8">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a
              href="/sites/shadcn-sample"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <HomeIcon />
              Shadcn Sample Top
            </a>
          </li>
        </ol>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
