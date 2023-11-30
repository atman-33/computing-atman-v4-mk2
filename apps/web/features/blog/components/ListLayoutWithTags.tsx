/* eslint-disable @nx/enforce-module-boundaries */
/* eslint-disable jsx-a11y/anchor-is-valid */
'use client';

import '../styles/blog.css';

import Link from '@/components/elements/Link';
import Tag from '@/components/elements/Tag';
import Thumbnail from '@/components/elements/Thumbnail';
import siteMetadata from '@/constants/site-metadata';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Blog } from 'contentlayer/generated';
import { slug } from 'github-slugger';
import { usePathname } from 'next/navigation';
import { CoreContent } from 'pliny/utils/contentlayer';
import { formatDate } from 'pliny/utils/formatDate';
import tagData from '../../../public/tag-data.json';
import { Pagination, PaginationProps } from './Pagination';

interface ListLayoutProps {
  posts: CoreContent<Blog>[];
  title: string;
  initialDisplayPosts?: CoreContent<Blog>[];
  pagination?: PaginationProps;
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination
}: ListLayoutProps) {
  const pathname = usePathname();
  const tagCounts = tagData as Record<string, number>;
  const tagKeys = Object.keys(tagCounts);
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a]);

  // console.log(`usePathname: ${pathname}`);
  // console.log(`pathWithLocale: ${locale}/blog`);

  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts;

  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-12 pb-6 pt-6">
          <h1 className="blog-page-title flex justify-center text-xl font-extrabold uppercase">
            {title}
          </h1>
        </div>

        <div className="col-span-12 grid grid-cols-12">
          <div className="hidden min-w-[280px] max-w-[280px] flex-wrap dark:bg-gray-900/70 dark:shadow-gray-800/40 md:col-span-4 md:flex">
            <div className="py-4 px-6">
              {pathname.startsWith(`/blog/tags`) ? (
                <Link
                  href={`/blog`}
                  className="hover:text-primary-500 dark:hover:text-primary-500 font-bold uppercase text-gray-700 dark:text-gray-300"
                >
                  All Posts
                </Link>
              ) : (
                <h3 className="text-primary-500 font-bold uppercase">All Posts</h3>
              )}
              <ul>
                {sortedTags.map((t) => {
                  return (
                    <li key={t} className="my-3">
                      {pathname.split('/blog/tags/')[1] === slug(t) ? (
                        <h3 className="text-primary-500 inline py-2 px-3 text-sm font-bold uppercase">
                          {`${t} (${tagCounts[t]})`}
                        </h3>
                      ) : (
                        <Link
                          href={`/blog/tags/${slug(t)}`}
                          className="hover:text-primary-500 dark:hover:text-primary-500 py-2 px-3 text-sm font-medium uppercase text-gray-500 dark:text-gray-300"
                          aria-label={`View posts tagged ${t}`}
                        >
                          <Tag text={t} count={tagCounts[t]} href={`/blog/tags/${slug(t)}`} />
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <ul>
              {displayPosts.map((post) => {
                // eslint-disable-next-line @typescript-eslint/no-shadow
                const { path, date, title, summary, tags, images } = post;
                return (
                  <>
                    <li key={path} className="py-5">
                      <article className="space-y-2 xl:space-y-0">
                        <dl>
                          <dt className="sr-only">Published on</dt>
                          <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                            <div className="flex flex-wrap items-center gap-x-2">
                              <FontAwesomeIcon icon={faCalendarDays} className="h-[16px]" />
                              <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                            </div>
                          </dd>
                        </dl>
                        <Link href={`/${path}`} className="text-gray-900 dark:text-gray-100">
                          <div className="grid grid-cols-12">
                            <div className="col-span-4 md:col-span-3">
                              <Thumbnail images={images} />
                            </div>
                            <h2 className="col-span-8 flex items-center text-2xl font-bold leading-8 tracking-tight md:col-span-9">
                              {title}
                            </h2>
                          </div>
                        </Link>
                        <div className="space-y-3">
                          <div>
                            <div className="flex flex-wrap">
                              {tags?.map((tag) => (
                                <Tag key={tag} text={tag} href={`/blog/tags/${slug(tag)}`} />
                              ))}
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            {summary}
                          </div>
                        </div>
                      </article>
                    </li>
                    <hr />
                  </>
                );
              })}
            </ul>
            {pagination && pagination.totalPages > 1 && (
              <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
