import 'pliny/search/algolia.css';
import '../../styles/global.css';

import { Metadata } from 'next';
import { Lato } from 'next/font/google';
import { Analytics, AnalyticsConfig } from 'pliny/analytics';
import { SearchConfig, SearchProvider } from 'pliny/search';
import { ReactNode } from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import SectionContainer from '../../components/section-container';
import siteMetadata from '../../data/site-metadata';
import { Locale, i18n } from '../../i18n/i18n-config';
import { ThemeProviders } from './_components/theme-providers';

// console.log(`process.cwd(): ${process.cwd()}`);
// console.log(`__dirname: ${__dirname}`);

const lato = Lato({
  weight: ['400', '700'],
  display: 'swap',
  style: 'normal',
  subsets: ['latin']
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website'
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner]
  }
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang} className={`${lato.className} scroll-smooth`} suppressHydrationWarning>
      {/* <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" /> */}
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon.ico" />
      <link rel="manifest" href="/static/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <body className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
        <ThemeProviders>
          <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
          <SectionContainer>
            <div className="flex flex-col justify-between font-sans">
              <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
                <Header />
                {children}
              </SearchProvider>
              <Footer />
            </div>
          </SectionContainer>
        </ThemeProviders>
      </body>
    </html>
  );
}
