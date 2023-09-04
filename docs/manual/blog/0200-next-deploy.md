## Preparetion

* create sitemap.ts

 `apps/web/app/sitemap.ts`

* create robots.ts

 `apps/web/app/robots.ts`

## Update package.json

 `package.json`

*add node ver*

```json
{
  "engines": {
    "node": "18.x"
  },
```

*add scripts*

```json
  "scripts": {
    "----DEPLOY SECTION----": "-----------------------",
    "cd:web": "npx nx build web --prod"
  },
```
