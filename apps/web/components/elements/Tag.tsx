import { slug } from 'github-slugger';
import Link from 'next/link';
import { Badge } from './Badge';
interface Props {
  text: string;
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/blog/tags/${slug(text)}`}
      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 my-2 mr-3 text-sm uppercase"
    >
      <Badge>{text.split(' ').join('-')}</Badge>
    </Link>
  );
};

export default Tag;
