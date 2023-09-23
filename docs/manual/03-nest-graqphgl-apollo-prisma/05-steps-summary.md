## Steps to add new table

1. Add new model to shema.prisma

 `libs/api/data-access-db/src/lib/schema.prisma`

2. Run prisma migrate

package.json

```json
"db:migrate:dev": "npx env-cmd -f .env.local npx prisma migrate dev"
```

After that, auto updated `libs/api/generated-db-types/src/index.ts`

3. Generate new feature

Run nx command @nx/js:library xxx (xxx is feature).
The required files are as follows.

* xxx.module.ts
* xxx.resolver.ts
* xxx.service.ts

> If you need dto, generate dto folder and files.
