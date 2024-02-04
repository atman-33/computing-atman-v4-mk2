/* eslint-disable @nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Blog } from '.contentlayer/generated/types';
import { Button } from '@/components/elements/Button';
import Link from '@/components/elements/Link';
import Tag from '@/components/elements/Tag';
import Thumbnail from '@/components/elements/Thumbnail';
import siteMetadata from '@/constants/site-metadata';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { slug as githubSlug } from 'github-slugger';
import { formatDate } from 'pliny/utils/formatDate';
// import NewsletterForm from 'pliny/ui/NewsletterForm';

const MAX_DISPLAY = 10;

export default function Home({ posts }: { posts: Blog[] }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex flex-wrap space-y-2 pb-4 pt-6 md:space-y-5 md:space-x-5">
          <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10">
            Latest Posts
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {posts.length === 0 && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post: Blog) => {
            const { slug, date, title, summary, tags, images } = post;
            return (
              <li key={slug} className="py-4">
                <article>
                  <div className="space-y-2  xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <div className="flex flex-wrap items-center gap-x-2">
                          <FontAwesomeIcon icon={faCalendarDays} className="h-[16px]" />
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </div>
                        <Link
                          href={`/blog/${slug}`}
                          className="grid grid-cols-12 text-gray-900 dark:text-gray-100"
                        >
                          <div className="col-span-4 md:col-span-2">
                            <Thumbnail images={images} />
                          </div>
                          <h2 className="justify-left col-span-8 flex items-center text-xl font-bold leading-8 tracking-tight md:col-span-10 md:text-2xl">
                            {title}
                          </h2>
                        </Link>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <div className="flex flex-wrap">
                            {tags.map((tag: string) => (
                              <Tag key={tag} text={tag} href={`/blog/tags/${githubSlug(tag)}`} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          <Button>Read more &rarr;</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            <Button>All Posts &rarr;</Button>
          </Link>
        </div>
      )}
      {/* {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  );
}
