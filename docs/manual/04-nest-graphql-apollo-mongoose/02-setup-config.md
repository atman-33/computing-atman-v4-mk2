## Install packages

```bash
npm i @nestjs/config
```

## Generate project

```bash
npx nx generate @nx/js:library shared-config --directory=libs/shared/config --importPath=@libs/shared/config --tags=scope:shared --bundler=swc

✔ Which unit test runner would you like to use? · jest
```

## Create env.ts

 `libs/shared/config/src/lib/env.ts`
