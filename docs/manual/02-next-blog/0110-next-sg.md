## next.config.js

* Add output.
* Add unoptimized: true to images.

```js
const nextConfig = {
    images: {
        unoptimized: true,
    },
    output: 'export',
    trailingSlash: true
};
```

> With trailingSlash option set, urls like /about will redirect to /about/.
> Reference URL: https://nextjs.org/docs/app/api-reference/next-config-js/trailingSlash

## Add ServeStaticModule to Nestjs project

1. Install pcakage

```bash
npm i @nestjs/serve-static
```

2. Add ServeStaticModule

**apps/api/src/app/app.module.ts**

```ts
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'web/.next'),
      exclude: ['/api/*', '/api/graphql']
    }),
```

After serve api(backend server), we can access Nextjs app. 
