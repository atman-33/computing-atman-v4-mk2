/* eslint-disable @nx/enforce-module-boundaries */
import siteMetadata from '@/constants/site-metadata';
import { allBlogs } from 'contentlayer/generated';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl;
  const blogRoutes = allBlogs.map((post) => ({
    url: `${siteUrl}/${post.path}`,
    lastModified: post.lastmod || post.date
  }));

  const routes = ['', 'blog', 'blog/tags', 'sites', 'games'].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0]
  }));

  return [...routes, ...blogRoutes];
}
