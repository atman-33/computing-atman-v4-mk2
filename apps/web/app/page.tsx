/* eslint-disable @nx/enforce-module-boundaries */
import HeroWithAnimation from '@/components/elements/HeroWithAnimation/HeroWithAnimation';
import { NEXT_PUBLIC_IS_DEV } from '@/config/index';
import { Blog, allBlogs } from 'contentlayer/generated';
import Link from 'next/link';
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer';
import backgroundImage from '../public/static/images/antoine-barres.jpg';
import cloudsImage from '../public/static/images/clouds.png';
import fogImage from '../public/static/images/fog-low.png';
import Main from './_components/Home';

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs);
  const posts = allCoreContent(sortedPosts);

  const debugPages = ['/dashboard', '/loop-animation', '/shadcn-ui', '/tailwindcss-sample'];

  return (
    <>
      {NEXT_PUBLIC_IS_DEV === '1' && (
        <div className=" m-2 items-center rounded-lg bg-red-400 p-4">
          {debugPages.map((page) => {
            return (
              <div key={page}>
                <Link href={page}>{page}</Link>
              </div>
            );
          })}
        </div>
      )}

      <HeroWithAnimation
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
