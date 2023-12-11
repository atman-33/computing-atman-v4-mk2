# For Backend

### install package

```bash
npm i -D prisma-nestjs-graphql
```

### setting generator nestgraphql to schema.prisma

 `libs/api/prisma/data-access-db/src/lib/schema.prisma`


```prisma
generator client {
    provider = "prisma-client-js"
}

datasource db {
    // provider = "postgresql"
    provider = "mongodb"
    url      = env("DB_URL")
}

generator nestgraphql {
    provider                = "node node_modules/prisma-nestjs-graphql"
    output                  = "./@generated"
    noAtomicOperations      = true
    combineScalarFilters    = true
    reExport                = Single
    emitSingle              = false
    emitCompiled            = false
    purgeOutput             = false
    // field validator
    fields_Validator_from   = "class-validator"
    fields_Validator_input  = true
    fields_Validator_output = true
    fields_Validator_model  = true
    // Args where|data nested validator
    decorate_1_type         = "*Args"
    decorate_1_field        = "@(data|where)"
    decorate_1_name         = ValidateNested
    decorate_1_from         = "class-validator"
    decorate_1_arguments    = "[]"
}
...
```

## update index.ts

`libs/api/prisma/data-access-db/src/index.ts`

```ts
export * from './lib/@generated/index';
export { PrismaModule } from './lib/prisma.module';
export { PrismaService } from './lib/prisma.service';
```

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
