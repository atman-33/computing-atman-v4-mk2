## Reference URL

[https://ui.shadcn.com/](https://ui.shadcn.com/docs/installation/manual)

[component.json needs to load tsconfig.json](https://github.com/shadcn-ui/ui/issues/718)  

[Radix × Tailwindなshadcn/uiがいい感じ](https://qiita.com/hajimism/items/e7bbe3711b43a8579224)  

[shadcn/uiライブラリを使いこなすための基礎](https://reffect.co.jp/react/shadcn-react/)  

## Install packages

```bash
npm install tailwindcss-animate class-variance-authority clsx tailwind-merge

# If you're using the new-york style, install @radix-ui/react-icons:
npm install @radix-ui/react-icons
```

## Generate ui-shadcn

```bash
npx nx generate @nx/next:library ui-shadcn --directory=web --importPath=@libs/web/ui-shadcn --tags=scope:web --bundler=swc

✔ Which stylesheet format would you like to use? · css
```

## Change tailwind.config.js

 `apps/web/tailwind.config.js`

> If you use pliny, `primary: colors.pink` needed.
> So comment out primary for shadcn.

```js:tailwind.config.js

    // primary: {
    //   DEFAULT: 'hsl(var(--primary))',
    //   foreground: 'hsl(var(--primary-foreground))'
    // },
    primary: colors.pink,
    gray: colors.gray,

```

## Change global.css

 `apps/web/styles/global.css`

## Create utils.ts

 `libs/web/ui-shadcn/src/lib/utils.ts`

## Create components.json

 `components.json`

 ```json:components.json
 {
  "$schema": "https://ui.shadcn.com/schema.json", 
  "style": "new-york", 
  "rsc": false, 
  "tailwind": {

    "config": "apps/web/tailwind.config.js",
    "css": "apps/web/app/styles/global.css",
    "baseColor": "stone",
    "cssVariables": true

  }, 
  "aliases": {

    "components": "@libs/web/ui-shadcn/components",
    "utils": "@libs/web/ui-shadcn/lib/utils"

  }
}
 

```

## Create tsconfig.json

 `tsconfig.json`

 ```json:tsconfig.json
 {
  "compilerOptions": {

    "baseUrl": ".",
    "paths": {
      "@libs/web/ui-shadcn": ["libs/web/ui-shadcn/src/index.ts"],
      "@libs/web/ui-shadcn/*": ["libs/web/ui-shadcn/src/*"]
    }

  }
} 
 ```
