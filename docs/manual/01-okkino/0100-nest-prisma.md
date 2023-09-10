## generate libs data-access-db

```bash
npx nx generate @nx/js:library data-access-db --directory=libs/api --importPath=@libs/api/data-access-db --tags=scope:api --bundler=swc

✔ Which unit test runner would you like to use? · none
```

delete `api-data-access-db.ts`

## install package

```bash
npm i -D prisma env-cmd prisma-nestjs-graphql
npm i @prisma/client
```

## generate schema.prisma

 `data-access-db/src/lib/schema.prisma`

## generate prisma.service.ts

 `data-access-db/src/lib/prisma.service.ts`

## generate prisma.module.ts

 `data-access-db/src/lib/prisma.module.ts`

## update index.ts

 `data-access-db/src/index.ts`

```ts
export * from './lib/prisma.module';
export * from './lib/prisma.service';
```

## update package.json

 `/package.json`

```json
  ...
  },
  "prisma": {
    "schema": "libs/api/data-access-db/src/lib/schema.prisma"
  }
}
```

## create .env.local

add db url to .env.local

 `/.env.local`

```text
ATMAN_DB_URL=postgresql://postgres:mysecretpassword@localhost:5555/atman-db?schema=public
```

> .env.local to .gitignore

## create docker-compose

 `/tools/atman-environment/dev.docker-compose.yml`

```yml
version: '3.9'
services:
  db:
    image: postgres
    ports:
      - '5555:5432'
    volumes:
      - db-data:/var/lib/postgresql/data
    environment:
      POSTGRES_PASSWORD: mysecretpassword
      PGDATA: /var/lib/postgresql/data/pgdata
volumes:
  db-data:
```

## update package.json

add `db:dockers:dev` to scripts

> run db:dockers:dev => create db.

 `/package.json`

```json
  "scripts": {
    "db:dockers:dev": "docker-compose -f tools/atman-environment/dev.docker-compose.yml up -d --no-recreate --remove-orphans",
    "db:migrate:dev": "npx env-cmd -f .env.local npx prisma migrate dev",
    "db:studio": "npx env-cmd -f .env.local npx prisma studio"
  },
```

## prisma migration

migration

```bash
npm db:migrate:dev
```

> If you want to reset data, at first delete migration folder and then run migrate command.

run prisma studio

```bash
npm db:studio
```
