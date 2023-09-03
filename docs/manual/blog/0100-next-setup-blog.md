## Reference URL

* https://github.com/timlrx/tailwind-nextjs-starter-blog  
* https://github.com/timlrx/pliny  

___________________________________________________________________________________________________

## install packages

```bash
npm i pliny
npm i github-slugger
```

___________________________________________________________________________________________________

## switch theme

### install packages

```bash
npm i @tailwindcss/typography
npm i @tailwindcss/forms
```

### update files

*`apps/web/tailwind.config.js`*

* add darkMode
* add theme
* add plugins (@tailwindcss/typography)

*`apps/web/app/[lang]/layout.tsx`*

* add className in body emelent
* add ThemeProviders
* use ThemeSwitch to change theme

___________________________________________________________________________________________________

## content layer

### reference url

https://contentlayer.dev/docs/getting-started-cddd76b7  
https://zenn.dev/you_5805/articles/contentlayer  

### install packages

```bash
npm i reading-time remark-gfm remark-math rehype-autolink-headings rehype-citation rehype-katex rehype-preset-minify rehype-prism-plus rehype-slug
```

```bash
npm i next-contentlayer
```

### update next.config.js

 `apps/web/next.config.js`

* add withContentlayer to plugins.

### update tsconfig.base.json

 `tsconfig.base.json`

```json
    "paths": {
      "contentlayer/generated": ["./.contentlayer/generated"],
```

### update tsconfig.json

 `apps/web/tsconfig.json`

```json
  "include": [
    "../../.contentlayer/generated"
```

### update .gitignore

 `.gitignore`

```text
# contentlayer
.contentlayer
```

### create contentlayer.config.ts

 `./contentlayer.config.ts`

* beware contentDirPath 

```ts
export default makeSource({
  contentDirPath: 'apps/web/data',
```

### update .eslintignore and .prettierignore

ex.  

```text
apps/web/public/tag-data.json
apps/web/public/search.json

*.md
*.mdx
```

___________________________________________________________________________________________________

## kbar or algolia search

### create SearchButton

 `apps/web/components/search-button.tsx`

### update layout.tsx

 `apps/web/app/[lang]/layout.tsx`

```ts
import 'pliny/search/algolia.css';
```

### add /search.json to middleware

 `apps/web/middleware.ts`

```ts
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (
    [
      '/search.json'
```

### update taiwind.config.js

 `apps/web/tailwind.config.js`

* add layouts and pliny

```js
module.exports = {
        content: [
            join(__dirname, '{src,pages,components,layouts,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
            // add blog mdx
            join(__dirname, './data/**/*.mdx'),
            // add pliny
            join(__dirname, '../../node_modules/pliny/**/*.js'),
            ...createGlobPatternsForDependencies(__dirname)
        ],
```
