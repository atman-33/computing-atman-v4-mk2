import siteMetadata from '../data/site-metadata';
import { getDictionary } from '../i18n/get-dictionary';
import { Locale, i18n } from '../i18n/i18n-config';
import logoImage from '../public/static/logo.svg';
import Image from './image';
import Link from './link';
import MobileNav from './mobile-nav';
import SearchButton from './search-button';
import ThemeSwitch from './theme-switch';

const Header = async (props: { locale?: Locale }) => {
  const { locale } = props;
  const t = await getDictionary(locale ?? i18n.defaultLocale);
  const headerNavLinks = t.header_nav_links;

  return (
    // <header className="sticky top-0 z-10 flex items-center justify-between bg-white py-10 dark:bg-gray-900">
    <header className="sticky top-0 z-10 flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3 mt-3">
              <Image src={logoImage} width={24} height={24} alt={'Logo'} />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
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
