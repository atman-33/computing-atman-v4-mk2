/* eslint-disable @nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import Image from '@/components/elements/Image';
import CustomLink from '@/components/elements/Link';
import type { MDXComponents } from 'mdx/types';
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm';
import Pre from 'pliny/ui/Pre';
import TOCInline from 'pliny/ui/TOCInline';

export const components: MDXComponents = {
  Image,
  TOCInline,
  //@ts-ignore
  a: CustomLink,
  //@ts-ignore
  pre: Pre,
  BlogNewsletterForm
};
