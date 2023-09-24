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
