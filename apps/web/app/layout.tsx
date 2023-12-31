/* eslint-disable @nx/enforce-module-boundaries */
import '@/styles/global.css';
import 'pliny/search/algolia.css';

import SectionContainer from '@/components/elements/SectionContainer';
import GoogleAnalytics from '@/components/heads/GoogleAnalytics';
import Footer from '@/components/layouts/Footer';
import ApolloProvider from '@/components/providers/ApolloProvider';
import StatesProvider from '@/components/providers/StatesProvider';
import ThemeProvider from '@/components/providers/ThemeProvider';
import siteMetadata from '@/constants/site-metadata';
import { Metadata } from 'next';
import { Analytics, AnalyticsConfig } from 'pliny/analytics';
import { SearchConfig, SearchProvider } from 'pliny/search';
import { ReactNode } from 'react';
import DynamicHeader from './_components/DynamicHeader';

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

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="/static/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/static/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta
          name="thumbnail"
          content={`${siteMetadata.siteUrl}/static/images/antoine-barres.jpg`}
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>

      <body className="overflow-x-hidden bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
        <ApolloProvider>
          <StatesProvider>
            <ThemeProvider defaultTheme={siteMetadata.theme}>
              <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
              <SectionContainer>
                <div className="flex min-h-[100vh] flex-col justify-between font-sans">
                  <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
                    <DynamicHeader />
                    <div className="flex-1">{children}</div>
                    <Footer />
                  </SearchProvider>
                </div>
              </SectionContainer>
            </ThemeProvider>
          </StatesProvider>
        </ApolloProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
