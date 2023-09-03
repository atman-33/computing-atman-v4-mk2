## add scripts to package.json

 `package.json`

```json
  "scripts": {
    "----DEPLOY SECTION----": "-----------------------",
    "cd:api": "npm run validate:api-env && npm run cd:db-push && npm run cd:db-seed  && npx nx build api --prod",
    "cd:web": "npm run validate:web-env && npx nx build web --prod",
    "cd:web-admin": "npm run validate:web-admin-env && npx nx build web-admin --prod",
    "cd:db-push": "npx prisma db push --accept-data-loss",
    "cd:db-seed": "npx ts-node --project tools/tsconfig.tools.json tools/database/seed.dev.ts"
```

_________________________________________________

*manual movie link*  
https://www.youtube.com/watch?v=P_qficMkLTI&t=5s  

# api => deploy railway ver

 `reference url`

https://railway.app/  

## setup variables

*setup env*  

* OKKINO_DB_URL => railway's Postgres DB_URL
* OKKINO_ENV => production
* OKKINO_API_PORT => 80
* PORT => 80

## setup settings

* Automatic Deployments => development (branch)
* Domains => okkino-dev.up.railway.app
* Build Command => npm run cd:api
* Deploy Start Command => node dist/apps/api/main.js

_________________________________________________

# web => deploy vercel ver

 `reference url`

https://vercel.com/  

## setup commands

* create new project  
* Build Command => npm run cd:web
* Output Directory => dist/apps/web/.next

## setup variables

* OKKINO_WEB_GQL_URL => https://okkino-dev.up.railway.app/graphql
* OKKINO_WEB_STORAGE_URL => https://okkino-dev.up.railway.app/images
* OKKINO_WEB_STORAGE_ENDPOINT => okkino-dev.up.railway.app/images
* OKKINO_WEB_STORAGE_HOSTNAME => okkino-dev.up.railway.app

## change Production Braunch

* Git Branch Name => develop
* Domains => okkino-dev-web.vercel.app
* Redirect to => No Redirect
# Debloy hook

## setup deploy hooks

*Vercel*

* Git Create Hook
  + name => okkino-dev-hook  
  + branch => develop

* copy hook URL (use for Railway later)

*Railway*

* Project Settigng > Webhooks
  + paste the hook URL from Vercel
