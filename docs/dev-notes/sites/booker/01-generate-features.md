## Install packages

```bash
npm i link-preview-js
```

## Generate feature-bookmarks

```bash
npx nx generate @nx/js:library api-feature-bookmarks --directory=libs/api/sites/booker/feature-bookmarks --importPath=@libs/api/sites/booker/feature-bookmarks --tags=scope:api --bundler=swc

✔ Which unit test runner would you like to use? · jest
```

## Generate feature-links

```bash
npx nx generate @nx/js:library api-feature-links --directory=libs/api/sites/booker/feature-links --importPath=@libs/api/sites/booker/feature-links --tags=scope:api --bundler=swc

✔ Which unit test runner would you like to use? · jest
```