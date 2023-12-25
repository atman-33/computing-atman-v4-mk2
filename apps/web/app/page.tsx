/* eslint-disable @nx/enforce-module-boundaries */
import HeroWithAnimation from '@/components/elements/HeroWithAnimation/HeroWithAnimation';
import Link from '@/components/elements/Link';
import { NEXT_PUBLIC_IS_DEV } from '@/config/index';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
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

      <Home posts={posts as unknown as Blog[]} />
    </>
  );
}
