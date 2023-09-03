/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { MDXComponents } from 'mdx/types';
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm';
import Pre from 'pliny/ui/Pre';
import TOCInline from 'pliny/ui/TOCInline';
import Image from './image';
import CustomLink from './link';

export const components: MDXComponents = {
  Image,
  TOCInline,
  //@ts-ignore
  a: CustomLink,
  //@ts-ignore
  pre: Pre,
  BlogNewsletterForm
};
