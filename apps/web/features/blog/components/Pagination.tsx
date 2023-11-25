/* eslint-disable @nx/enforce-module-boundaries */
import { Button } from '@/components/elements/Button';
import Link from '@/components/elements/Link';
import { usePathname } from 'next/navigation';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

const Pagination = ({ totalPages, currentPage }: PaginationProps) => {
  const pathname = usePathname();
  const basePath = pathname.split('/')[1];
  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <Button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </Button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            <Button>Previous</Button>
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <Button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </Button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            <Button>Next</Button>
          </Link>
        )}
      </nav>
    </div>
  );
};

export { Pagination };
export type { PaginationProps };
