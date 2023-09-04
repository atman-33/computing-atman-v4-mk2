import { allBlogs } from 'contentlayer/generated';
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer';
import { Locale } from '../../../i18n/i18n-config';
import ListLayoutWithTags from '../../../layouts/list-layout-with-tags';
import { genPageMetadata } from '../_components/seo';

const POSTS_PER_PAGE = 5;

export const metadata = genPageMetadata({ title: 'Blog' });

interface IPageParams {
  params: { lang: Locale };
}

export default function BlogPage({ params }: IPageParams) {
  const posts = allCoreContent(sortPosts(allBlogs));
  const pageNumber = 1;
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  );
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE)
  };

  return (
    <ListLayoutWithTags
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
      locale={params.lang}
    />
  );
}
