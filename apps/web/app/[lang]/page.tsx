import { Blog, allBlogs } from 'contentlayer/generated';
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer';
import heroImage from '../../public/static/images/hero.png';
import Hero from './_components/hero';
import Main from './_components/main';

export default function Page() {
  const sortedPosts = sortPosts(allBlogs);
  const posts = allCoreContent(sortedPosts);
  return (
    <>
      <Hero
        title="Happy coding!!"
        description={`This website is an information site on system development and programming related to IT.`}
        heroImage={heroImage}
      />
      <Main posts={posts as unknown as Blog[]} />
    </>
  );
}
