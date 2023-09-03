## install packages

```bash
npm i -D @nx/next
```

## generate next web

```bash
nx g @nx/next:app web --tags "scope:web"

✔ Which stylesheet format would you like to use? · css
✔ Which E2E test runner would you like to use? · cypress
✔ Would you like to use the App Router (recommended)? (Y/n) · true
```

## delete files

- `apps/web/app/global.css`
- `apps/web/app/page.module.css`

## nx migrate latest

```bash
nx migrate latest
npm i
```

> '23/8/16 not need appDir: true in nextConfig

## update lauout.tsx

`apps/web/app/layout.tsx`

```ts
import { ReactNode } from 'react';

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

## create Head

`apps/web/app/head.tsx`

```ts
export default function Head() {
  return (
    <>
      <title>My Next.js App</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
  );
}
```

## update page.tsx

`apps/web/app/page.tsx`

```ts
export default function Page() {
  return (
    <>
      <div>Hello World! From NextJS 13</div>
    </>
  );
}
```
