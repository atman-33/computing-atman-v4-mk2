import { Facebook, Github, Home, Linkedin, Mail, Mastodon, React, Twitter, Youtube } from './icons';

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  mastodon: Mastodon,
  home: Home,
  react: React
};

type IconProps = {
  kind: keyof typeof components;
  href?: string;
  target?: string;
  size?: number;
};

const Icon = ({ kind, href, target = '_blank', size = 8 }: IconProps) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href))) {
    return null;
  }

  const SocialSvg = components[kind];

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target={target}
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`hover:text-primary-500 dark:hover:text-primary-400 fill-current text-gray-700 dark:text-gray-200 h-${size} w-${size}`}
      />
    </a>
  );
};

export default Icon;
