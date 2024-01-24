---
title: Nx Next.js で shadcn を利用する方法
date: '2023-10-11'
lastmod: '2023-10-11'
tags: ['nx', 'next-js', 'shadcn']
images: ['/static/images/shadcn.jpg']
summary: Nx モノレポの Next.js で shadcn を利用する方法を説明します。
---

Nx モノレポの Next.js で shadcn を利用する方法を説明します。

## 1. Nx を初期化して Next.js プロジェクトを作成

```bash
npx create-nx-workspace@latest
```

```bash
npm i -D @nx/next
```

```bash
nx g @nx/next:app web --tags "scope:web"

✔ Which stylesheet format would you like to use? · css
✔ Which E2E test runner would you like to use? · cypress
✔ Would you like to use the App Router (recommended)? (Y/n) · true
```

## 2. Tailwind を追加

```bash
nx g @nx/react:setup-tailwind --project=web
```

## 3. shadcn 用のライブラリを追加

```bash
npx nx generate @nx/next:library ui-shadcn --directory=web --importPath=@libs/web/ui-shadcn --tags=scope:web --bundler=swc

✔ Which stylesheet format would you like to use? · css
```

ライブラリ作成後、下記を行っておきます。

* `server.ts` を削除
* src フォルダ直下に、`components` フォルダを作成


この時点でディレクトリ構成は下記となります。

```txt
(your workspace)
  |- apps/
  |    |- web/
  |
  |- libs/  
  |    |- web/
  |        |- ui-shadcn/   
  |             |- src/   
  |                 |- components/   
  |                 |- index.ts   
  |- package.json
```

## 4. shadcn/ui を追加

```bash
npm install tailwindcss-animate class-variance-authority clsx tailwind-merge
```

```bash
npm install @radix-ui/react-icons
```

`tailwind.config.js` を編集  　

```js:apps/web/tailwind.config.js
/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

module.exports = {
  darkMode: ['class'],
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
```

`global.css` を追加  

```css:apps/web/styles/global.css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 47.4% 11.2%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 222.2 47.4% 11.2%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 47.4% 11.2%;

    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;

    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;

    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --destructive: 0 100% 50%;
    --destructive-foreground: 210 40% 98%;

    --ring: 215 20.2% 65.1%;

    --radius: 0.5rem;
  }

  .dark {
    --background: 224 71% 4%;
    --foreground: 213 31% 91%;

    --muted: 223 47% 11%;
    --muted-foreground: 215.4 16.3% 56.9%;

    --accent: 216 34% 17%;
    --accent-foreground: 210 40% 98%;

    --popover: 224 71% 4%;
    --popover-foreground: 215 20.2% 65.1%;

    --border: 216 34% 17%;
    --input: 216 34% 17%;

    --card: 224 71% 4%;
    --card-foreground: 213 31% 91%;

    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 1.2%;

    --secondary: 222.2 47.4% 11.2%;
    --secondary-foreground: 210 40% 98%;

    --destructive: 0 63% 31%;
    --destructive-foreground: 210 40% 98%;

    --ring: 216 34% 17%;

    --radius: 0.5rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
}
```　

## 5. shadcn 用の util.ts を追加

**utils.ts**

```ts:libs/web/ui-shadcn/src/lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## 6. ルートディレクトリに component.json を追加

**components.json**

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

## 7. ルートディレクトリに tsconfig.json を追加

`tsconfig.json` は、shacn/ui の CLI コマンド実行に必要です。

 **tsconfig.json**

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

これでセットアップは完了です。

## 8. shadcn/ui コンポーネントを実装

shadcn/ui CLIを使用してコンポーネントをインストール

```bash
npx shadcn-ui@latest add button
```

コンポーネントの tsx ファイルを編集

* 'use client' を追加
* `@nx/enforce-module-boundaries` の警告を解消

```tsx:libs/web/ui-shadcn/src/components/ui/button.tsx
'use client';
...
// eslint-disable-next-line @nx/enforce-module-boundaries
import { cn } from '@libs/web/ui-shadcn/lib/utils';
...
```

`index.ts` に作成したコンポーネントのエクスポートを追加  

```ts:libs/web/ui-shadcn/src/index.ts
export * from './components/ui/button';
```

コンポーネントを `page.tsx` に実装  

```tsx:page.tsx
import { Button } from '@libs/web/ui-shadcn';

const Page = () => {
  return <Button>Button</Button>
}

export default Page;
```

## 参考URL

[https://ui.shadcn.com/](https://ui.shadcn.com/docs/installation/manual)

[component.json needs to load tsconfig.json](https://github.com/shadcn-ui/ui/issues/718)  