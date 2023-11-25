import Link from 'next/link';
import { Badge } from './Badge';
interface Props {
  text: string;
  href?: string;
  count?: number;
}

const Tag = ({ text, href, count }: Props) => {
  return href ? (
    <Link
      href={href}
      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 my-2 mr-3 text-sm uppercase"
    >
      <Badge>{text.split(' ').join('-') + (count ? ` (${count})` : '')}</Badge>
    </Link>
  ) : (
    <Badge className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 my-2 mr-3 text-sm uppercase">
      {text}
    </Badge>
  );
};
// `/blog/tags/${slug(text)}`
export default Tag;
