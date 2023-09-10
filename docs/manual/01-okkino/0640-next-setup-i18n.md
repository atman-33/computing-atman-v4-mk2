## install packages

```bash
npm i --save-dev @types/negotiator
npm i @formatjs/intl-localematcher server-only
```

## create i18n-config

 `apps/web/i18n/i18n-config.ts`

## create middleware

 `apps/web/middleware.ts`

 > you should add image files in public. do not forget! 

## create get-dictionary

 `apps/web/i18n/get-dictionary.ts`

## create dictionaries

* `apps/web/i18n/dictionaries/en.json`
* `apps/web/i18n/dictionaries/ja.json`

## create `[lang]` folder

* create `apps/web/app/[lang]`
* move files to that folder
  + page.tsx
  + layout.tsx
  + head.tsx

ex.

 `apps/web/app/[lang]/layout.tsx`

```tsx
import { Lato } from '@next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { getDictionary } from '../../i18n/get-dictionary';
import { Locale, i18n } from '../../i18n/i18n-config';
import '../../styles/global.css';

const lato = Lato({
  weight: ['400', '700'],
  display: 'swap',
  style: 'normal',
  subsets: ['latin']
});

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
  const { navBar } = await getDictionary(params.lang);

  return (
    <html lang={params.lang} className={lato.className}>
      <body>
        <div className="ml-6 mr-6 max-w-screen-2xl md:ml-14 md:mr-4">
          <nav className="my-8 flex items-center justify-between md:my-0 md:h-28 lg:h-36">
            <Image
              src={'/logo.svg'}
              width={85}
              height={15}
              alt={'logo'}
              className="md:h-5 md:w-28"
            />
            <div className="flex gap-10">
              <Link href={'/menu'} className="text-xs uppercase text-black">
                {navBar.menu}
              </Link>
              <Link href={'/cart'} className="text-xs uppercase text-black">
                {navBar.cart}
              </Link>
            </div>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
```

## create locale-switcher

* create `apps/web/app/[lang]/components/locale-switcher.tsx`

* add `LocalSwitcher` on layout.tsx
 `apps/web/app/[lang]/layout.tsx`
