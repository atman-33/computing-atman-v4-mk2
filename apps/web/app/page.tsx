import { env } from '@libs/shared/config';
import { Blog, allBlogs } from 'contentlayer/generated';
import Link from 'next/link';
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer';
import heroImage from '../public/static/images/keyboard.jpg';
import Hero from './_components/hero';
import Main from './_components/main';

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs);
  const posts = allCoreContent(sortedPosts);

  return (
    <>
      {env.NEXT_PUBLIC_IS_DEV === '1' && (
        <Link href={`/test`} className="my-4">
          Test Page
        </Link>
      )}
      <Hero
        title="Computing Atman"
        description={`This website is an information site on system development and programming related to IT.`}
        heroImage={heroImage}
      />
      <Main posts={posts as unknown as Blog[]} />
    </>
  );
}
