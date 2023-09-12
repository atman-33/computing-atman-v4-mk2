import { Blog, allBlogs } from 'contentlayer/generated';
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer';
import { getDictionary } from '../../i18n/get-dictionary';
import { Locale, i18n } from '../../i18n/i18n-config';
import heroImage from '../../public/static/images/hero.png';
import Hero from './_components/hero';
import Main from './_components/main';

interface IPageParams {
  params: { lang: Locale };
}

export default async function Page({ params }: IPageParams) {
  const t = await getDictionary(params.lang ?? i18n.defaultLocale);

  const sortedPosts = sortPosts(allBlogs);
  const posts = allCoreContent(sortedPosts);
  return (
    <>
      <Hero title="Computing Atman" description={t.description} heroImage={heroImage} />
      <Main posts={posts as unknown as Blog[]} />
    </>
  );
}
