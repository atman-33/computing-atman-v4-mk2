## Web to render.com

**render.com**  

https://dashboard.render.com/

### Update package.json

 `package.json`

```json
  "scripts": {
    "----DEPLOY SECTION----": "-----------------------",
    "cd:web": "npx nx build web --prod",
    "cd:web-start": "cd dist/apps/web && npm run start"
  },
```

### Settings

Build Command:  

 `node --version && npm install --force && npm run cd:web`

Start Command:  

 `npm run cd:web-start`

### Environment Variables

* set variables of .env.local
* set PORT (any PORT is OK)

> If not set PORT, display blank page!!
