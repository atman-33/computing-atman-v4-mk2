## Cannot get /public/{image file}

* If you can use i18n and middleware.ts, you add image files to middleware.ts

*how to use publid files as not apply i18n*

1. create `public/static`

ex.  

```text
/public/static/favicon.ico
              /logo.svg
```

2. change `apps/web/middleware.ts`

add *static* to matcher.

```ts
export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|static).*)']
};
```

## Not work router.push

insted of router.push use window.location.href

## Build error => `next/font` error:

ex.

```bash
app/layout.tsx
`next/font` error:
Failed to fetch `Lato` from Google Fonts.
```

Step: 

1. delete `.next` folder
2. build the project

## env variables is undefined.

**NEXT_PUBLIC_ is needed.**

Non-NEXT_PUBLIC_ environment variables are only available in the Node.js environment, meaning they aren't accessible to the browser (the client runs in a different environment).

> Reference URL: https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables#exposing-environment-variables-to-the-browser

## CORS error

Add cors option to **NestJS**.

 `apps/api/src/main.ts`

```ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());

  console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
  if (process.env.NODE_ENV === 'development') {
    app.enableCors({
      origin: '*',
      allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept'
    });
  }
```

> Reference URL: https://qiita.com/daikiojm/items/4c2143a213332abf1170

## When update next page exept top page (after deply), return top page.

Add trailingSlash: true to next.config.js

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
    ...
    trailingSlash: true,
    ...
};

module.exports = nextConfig;
```

> Reference URL: https://zenn.dev/kisukeyas/articles/6f679a67db3883

## Not support Dynamic routes when using static export

2023/12/22  

error sample:  

```txt
Server Error
Error: Page "/sites/booker/link/[id]/page" is missing exported function "generateStaticParams()", which is required with "output: export" config.
```

In this time, Nextjs does not support dynamic routes when using static export.
In other words, we cannot use `[id]` etc.

> If the above ids [id] already determined, you can use dynamic routes when using static export.

> Reference URL:  
> https://blog.stin.ink/articles/static-exports-with-nextjs-app-router
> https://stackoverflow.com/questions/77177956/next-js-static-export-with-dynamic-routes