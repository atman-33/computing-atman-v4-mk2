## generate utils-shared

```bash
npx nx generate @nx/js:library web-utils-shared --directory=libs/web/utils-shared --importPath=@libs/web/utils-shared --tags=scope:web --bundler=swc

✔ Which unit test runner would you like to use? · jest
✔ What should be the project name and where should it be generated? · web-utils-shared @ libs/web/utils-shared
```

## delete files in lib folder

delte files in `libs/web/utils-shared/src/lib`

## create and use file

* create `libs/web/utils-shared/src/lib/rgb-to-data-url.ts`
* fix export on `libs/web/utils-shared/src/index.ts`
* use rgbToDataUrl on `apps/web/app/page.tsx`
