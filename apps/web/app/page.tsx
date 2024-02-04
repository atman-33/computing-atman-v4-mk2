/* eslint-disable @nx/enforce-module-boundaries */
import HeroWithAnimation from '@/components/elements/HeroWithAnimation/HeroWithAnimation';
import Link from '@/components/elements/Link';
import { NEXT_PUBLIC_IS_DEV } from '@/config/index';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Blog, allBlogs } from 'contentlayer/generated';
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer';
import cloudsImage from '../public/static/images/clouds.png';
import backgroundImage from '../public/static/images/coding.jpg';
import Home from './_components/Home';

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs);
  const posts = allCoreContent(sortedPosts);

  return (
    <>
      {NEXT_PUBLIC_IS_DEV === '1' && (
        <div className="m-2 items-center rounded-lg bg-red-400 p-2 pl-4">
          <Link href="/debug">
            <span className="flex flex-wrap">
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="mr-2 h-6 w-6" /> Go to Debug
            </span>
          </Link>
        </div>
      )}

      <HeroWithAnimation
        backgroundImage1={backgroundImage}
        // backgroundImage2={fogImage}
        animationImage={cloudsImage}
        title="Computing Atman"
        description="This website is an information site on system development and programming related to IT."
      />

      <div className="mt-4">
        <h1 className="text-3xl font-extrabold">Sites</h1>

        <Link href="/">
          <div className="m-3 flex items-center space-x-4 rounded-md">
            <button className="flex h-10 w-10 transform items-center justify-center rounded-full bg-gray-500 text-lg font-semibold text-white hover:bg-gray-600">
              <FontAwesomeIcon icon={faReact as IconDefinition} className="h-8 w-8" />
            </button>
            <div className="rounded-md bg-gray-200 p-2 px-4 text-xl shadow-lg transition hover:translate-y-0.5 hover:shadow-sm dark:bg-gray-800">
              React x Tailwindcss x Shadcn-ui Samples
            </div>
          </div>
        </Link>
      </div>

      <Home posts={posts as unknown as Blog[]} />
    </>
  );
}
