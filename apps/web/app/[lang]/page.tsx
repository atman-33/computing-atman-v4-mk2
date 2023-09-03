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
        title="For Programming"
        description={`This website is an information site on system development and programming related to IT.
        I provide information on software that handles data, such as DB and BI tools, as well as coding-related topics such as C#, VBA, Python, Javascript, and Typescript.`}
        heroImage={heroImage}
      />
      <Main posts={posts as unknown as Blog[]} />
    </>
  );
}
