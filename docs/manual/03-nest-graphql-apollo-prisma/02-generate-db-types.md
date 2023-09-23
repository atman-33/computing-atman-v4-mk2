# For Backend

## generate types

```bash
npx nx generate @nx/js:library api-generated-db-types --directory=libs/api/prisma/generated-db-types --importPath=@libs/api/prisma/generated-db-types --tags=scope:api --bundler=swc

✔ Which unit test runner would you like to use? · none
```

delete lib folder

### install package

```bash
npm i -D prisma-nestjs-graphql
```

### setting generator nestgraphql to schema.prisma

 `libs/api/prisma/data-access-db/src/lib/schema.prisma`

# For Frontend

## install packages

```bash
npm i @prisma/client
```

## prisma generate

**prisma generate** command is to create Prisma Client codes for Frontend.

```bash
npx prisma generate
```
