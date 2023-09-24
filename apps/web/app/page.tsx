/* eslint-disable @nx/enforce-module-boundaries */
import { env } from '@libs/shared/config';
import { Blog, allBlogs } from 'contentlayer/generated';
import Link from 'next/link';
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer';
import bg from '../public/static/images/antoine-barres.jpg';
// import heroImage from '../public/static/images/keyboard.jpg';
// import Hero from './_components/hero';
import Main from './_components/main';

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs);
  const posts = allCoreContent(sortedPosts);

  return (
    <>
      {env.NEXT_PUBLIC_IS_DEV === '1' && (
        <Link href={`/test`} className="m-4 bg-purple-500 p-4">
          Test Page
        </Link>
      )}

      {/* <Image
        className="flex items-center justify-center"
        src={'static/images/antoine-barres.jpg'}
        width={0}
        height={0}
        style={{ margin: '0 calc(50% - 50vw)', width: '100vw', height: 'auto' }}
        alt={'antoine-barres'}
      ></Image> */}

      <div
        className="top-0 flex items-center justify-center bg-cover bg-scroll bg-center"
        style={{
          backgroundImage: `url(${bg.src})`,
          margin: '0 calc(50% - 50vw)',
          width: '100vw',
          height: '50vw'
        }}
      >
        <div className="mx-4 flex w-full items-center lg:w-1/2">
          <div className="mb-4 max-w-2xl">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              Computing Atman
            </h1>
            <p className="py-2 text-xl leading-normal text-gray-500 dark:text-gray-300 lg:text-xl xl:text-2xl">
              {`This website is an information site on system development and programming related to IT.`}
            </p>
          </div>
        </div>{' '}
      </div>

      {/* <div className="z-[-1]">
        <Image
          src={'static/images/antoine-barres.jpg'}
          width={0}
          height={0}
          style={{
            margin: '0 calc(50% - 50vw)',
            width: '100vw',
            height: 'auto',
            maxWidth: 'none'
          }}
          alt={'antoine-barres'}
        ></Image>
      </div> */}

      {/* <Hero
        title="Computing Atman"
        description={`This website is an information site on system development and programming related to IT.`}
        heroImage={heroImage}
      /> */}
      <Main posts={posts as unknown as Blog[]} />
    </>
  );
}
