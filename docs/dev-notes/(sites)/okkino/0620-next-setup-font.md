## install packages

> From version 13.2 onward, next/font has been built into Next.js so not nedd install @next/font!

```bash
npm i @next/font
```

## use font

ex.

 `apps/web/app/layout.tsx`

```tsx
import { Lato } from '@next/font/google';
import { ReactNode } from 'react';
import '../styles/global.css';

const lato = Lato({
  weight: ['400', '700'],
  display: 'swap',
  style: 'normal',
  subsets: ['latin']
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={lato.className}>
      <body>{children}</body>
    </html>
  );
}
```
