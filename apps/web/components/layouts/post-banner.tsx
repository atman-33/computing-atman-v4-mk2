import type { Blog } from 'contentlayer/generated';
import Bleed from 'pliny/ui/Bleed';
import { CoreContent } from 'pliny/utils/contentlayer';
import { ReactNode } from 'react';
import siteMetadata from '../../data/site-metadata';
import Comments from '../comments';
import Image from '../image';
import Link from '../link';
import PageTitle from '../page-title';
import ScrollTopAndComment from '../scroll-top-and-comment';
import SectionContainer from '../section-container';

interface LayoutProps {
  content: CoreContent<Blog>;
  children: ReactNode;
  next?: { path: string; title: string };
  prev?: { path: string; title: string };
}

export default function PostMinimal({ content, next, prev, children }: LayoutProps) {
  const { slug, title, images } = content;
  // console.log(`images: ${images?.toString()}`);
  // console.log(`images: ${JSON.stringify(images)}`);

  const displayImage =
    images && images.length > 0 && typeof images[0] === 'object'
      ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        images[0].url
      : 'https://picsum.photos/seed/picsum/800/400';

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div>
          <div className="space-y-1 pb-10 text-center dark:border-gray-700">
            <div className="w-full">
              <Bleed>
                <div className="relative aspect-[2/1] w-full">
                  <Image src={displayImage} alt={title} fill className="object-cover" />
                </div>
              </Bleed>
            </div>
            <div className="relative pt-10">
              <PageTitle>{title}</PageTitle>
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none py-4">{children}</div>
          {siteMetadata.comments && (
            <div className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300" id="comment">
              <Comments slug={slug} />
            </div>
          )}
          <footer>
            <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
              {prev && prev.path && (
                <div className="pt-4 xl:pt-8">
                  <Link
                    href={`/${prev.path}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label={`Previous post: ${prev.title}`}
                  >
                    &larr; {prev.title}
                  </Link>
                </div>
              )}
              {next && next.path && (
                <div className="pt-4 xl:pt-8">
                  <Link
                    href={`/${next.path}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label={`Next post: ${next.title}`}
                  >
                    {next.title} &rarr;
                  </Link>
                </div>
              )}
            </div>
          </footer>
        </div>
      </article>
    </SectionContainer>
  );
}
