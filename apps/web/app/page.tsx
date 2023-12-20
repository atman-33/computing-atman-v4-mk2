/* eslint-disable @nx/enforce-module-boundaries */
import HeroWithAnimation from '@/components/elements/HeroWithAnimation/HeroWithAnimation';
import { NEXT_PUBLIC_IS_DEV } from '@/config/index';
import { Blog, allBlogs } from 'contentlayer/generated';
import Link from 'next/link';
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer';
import cloudsImage from '../public/static/images/clouds.png';
import backgroundImage from '../public/static/images/coding.jpg';
import Home from './_components/Home';

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs);
  const posts = allCoreContent(sortedPosts);

  const debugPages = [
    '/auth-login-sample',
    '/auth-test-1',
    '/auth-test-2',
    '/hover-button',
    '/loop-animation',
    '/ok-cancel-dialog',
    '/shadcn-ui',
    '/tailwindcss-sample',
    '/login',
    '/signup',
    '/sites/booker'
  ];

  return (
    <>
      {NEXT_PUBLIC_IS_DEV === '1' && (
        <div className=" m-2 items-center rounded-lg bg-purple-400 p-2 pl-4">
          <h2 className="text-xl font-bold">Debug</h2>
          <div>
            {debugPages.map((page) => {
              return (
                <div key={page}>
                  <Link href={page}>{page}</Link>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <HeroWithAnimation
        backgroundImage1={backgroundImage}
        // backgroundImage2={fogImage}
        animationImage={cloudsImage}
        title="Computing Atman"
        description="This website is an information site on system development and programming related to IT."
      />

      <Home posts={posts as unknown as Blog[]} />
    </>
  );
}
