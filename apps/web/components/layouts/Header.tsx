/* eslint-disable @nx/enforce-module-boundaries */
import headerNavLinks from '@/constants/header-nav-links';
import siteMetadata from '@/constants/site-metadata';
import logoImage from '../../public/static/logo.svg';
import Image from '../elements/Image';
import Link from '../elements/Link';
import MobileNav from './MobileNav';
import SearchButton from './SearchButton';
import ThemeSwitch from './ThemeSwitch';

const Header = async () => {
  return (
    <header
      className="sticky top-0 z-10 flex items-center justify-between bg-slate-300 py-2 px-10 shadow-xl dark:bg-gray-800 md:py-4"
      style={{ margin: '0 calc(50% - 50vw)', width: '100vw' }}
    >
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-center">
            <div className="mr-3">
              <Image src={logoImage} width={24} height={24} alt={'Logo'} />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="h-6 text-base font-semibold sm:block">{siteMetadata.headerTitle}</div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav headerNavLinks={headerNavLinks} />
      </div>
    </header>
  );
};

export default Header;
