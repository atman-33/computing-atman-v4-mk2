/* eslint-disable @nx/enforce-module-boundaries */
import { env } from '@libs/shared/config';
import { Blog, allBlogs } from 'contentlayer/generated';
import Link from 'next/link';
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer';
import backgroundImage from '../public/static/images/antoine-barres.jpg';
import cloudsImage from '../public/static/images/clouds.png';
import fogImage from '../public/static/images/fog-low.png';
import HeroWithBackground from './_components/hero-with-background';
import Main from './_components/main';

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs);
  const posts = allCoreContent(sortedPosts);

  return (
    <>
      {env.NEXT_PUBLIC_IS_DEV === '1' && (
        <div className="m-2 rounded-lg bg-purple-500 p-2">
          <div>
            <Link href={`/test/get-db-data`}>test/get-db-data</Link>
          </div>
          <div>
            <Link href={`/test/loop-animation`}>test/loop-animation</Link>
          </div>
        </div>
      )}

      <HeroWithBackground
        backgroundImage1={backgroundImage}
        backgroundImage2={fogImage}
        animationImage={cloudsImage}
        title="Computing Atman"
        description="This website is an information site on system development and programming related to IT."
      />

      <Main posts={posts as unknown as Blog[]} />
    </>
  );
}
