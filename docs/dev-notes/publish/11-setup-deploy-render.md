## Web to render.com

**render.com**  

https://dashboard.render.com/

### Update package.json

 `package.json`

```json
  "scripts": {
    "----DEPLOY SECTION----": "-----------------------",
    "cd:build-api": "npx nx build api --prod",
    "cd:build-web": "npx nx build web --prod",
    "cd:build": "npm run cd:build-api && npm run cd:build-web",
    "cd:web-start:server": "cd dist/apps/web && npm run start",
    "cd:web-start:static": "npx serve dist/apps/web/.next",
    "cd:api-start": "node dist/apps/api/main.js"
  },
```

### Settings

Build Command:  

 `node --version && npm install --force && nx reset && npm run cd:build`

Start Command:  

 `npm run cd:api-start`

### Environment Variables

* set variables of .env.local

```text
PORT=10000

NEXT_PUBLIC_IS_DEV=0

NEXT_PUBLIC_GISCUS_REPO=atman-33/computing-atman-v4-mk2
NEXT_PUBLIC_GISCUS_REPOSITORY_ID=***
NEXT_PUBLIC_GISCUS_CATEGORY=General
NEXT_PUBLIC_GISCUS_CATEGORY_ID=***

NEXT_PUBLIC_GA_ID=***

NEXT_PUBLIC_API_GQL_URL=https://xxx/api/graphql  *"xxx" is deployed url.

API_PORT=10000
DB_URL=***

PRODUCTION_ORIGIN=https://computing-atman.com
```

`PORT: 10000` (PORT 10000 is default port of render.com)

> If not set PORT, display blank page!!
