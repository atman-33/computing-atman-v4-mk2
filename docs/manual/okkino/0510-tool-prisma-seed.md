## create seed-data

 `tools/database/seed-data.ts`

## create seed.dev

 `tools/database/seed.dev.ts`

## add create seed script

 `package.json`

```json
  "scripts": {
    ...,
    "----START----": "-------------------------",
    "start:db:watch": "npm run db:dockers:dev  && npm run db:migrate:dev && npm run db:seed:dev && prisma generate --watch",
    "----DB SECTION----": "-------------------------",
    "db:seed:dev": "npx env-cmd -f .env.local ts-node --project tools/tsconfig.tools.json tools/database/seed.dev.ts",
```
