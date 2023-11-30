## reference URL

https://nx.dev/recipes/react/using-tailwind-css-in-react

## setup TailWind CSS

```bash
nx g @nx/react:setup-tailwind --project=web
```

or (following is manual ver)

### install packages

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

### init tailwindcss

cd `apps/web`

```bash
npx tailwindcss init -p
```

### update postcss.config

`apps/web/postcss.config.js`

```js
const { join } = require('path');

module.exports = {
  plugins: {
    tailwindcss: {
      config: join(__dirname, 'tailwind.config.js')
    },
    autoprefixer: {}
  }
};
```

## update tailwind.config

`apps/web/tailwind.config.js`

```js
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('node:path');

module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname)
  ],
  theme: {
    extend: {
      colors: {
        black: '#262217',
        beigeLight: '#FFFDF8',
        gray: {
          100: '#EAE9E8',
          200: '#D4D3D1',
          300: '#BEBDBA',
          400: '#A8A7A2',
          500: '#93918B',
          600: '#7D7A74',
          700: '#68655D',
          800: '#514E45',
          900: '#3C392F'
        }
      }
    },
    plugins: []
  }
};
```

## create global.css

`apps/web/styles/global.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## import global.css in layout.tsx

`apps/web/app/layout.tsx`

```tsx
import { ReactNode } from 'react';
import '../styles/global.css';

export default function RootLayout({
    ...
```

## add postcss.config to project.json

- on targets.build.options
- on targets.serve.options

`apps/web/project.json`

```json
  "targets": {
    "build": {
      "executor": "@nx/next:build",
      "outputs": [
        "{options.outputPath}"
      ],
      "defaultConfiguration": "production",
      "options": {
        "outputPath": "dist/apps/web",
+       "postcssConfig": "apps/web/postcss.config.js"
      },
    ...
    "serve": {
      "executor": "@nx/next:server",
      "defaultConfiguration": "development",
      "options": {
        "buildTarget": "web:build",
        "dev": true,
+       "postcssConfig": "apps/web/postcss.config.js"
      },
```

## use tailwind-scrollbar-hide

```bash
npm install tailwind-scrollbar-hide
```

update tailwind.config.js  
 `apps/web/tailwind.config.js`

```js
plugins: [require('tailwind-scrollbar-hide')];
```

## if not apply tailwindcss

if not aply taiwindcss, some bugs happens...  
once change global.css

ex.

```css
.test {
  martin: 10rem;
}
```

and then save and complie...
