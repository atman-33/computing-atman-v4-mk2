# add database table

## add model on shema.prisma

 `libs/api/data-access-db/src/lib/schema.prisma`

## db migrate

 `package.json`

```json
    "db:migrate:dev": "npx env-cmd -f .env.local npx prisma migrate dev",
```

## add feature library

ex. generate feature-home-block

```bash
npx nx generate @nx/js:library feature-home-block --directory=libs/api --importPath=@libs/api/feature-home-block --tags=scope:api --bundler=swc

✔ Which unit test runner would you like to use? · jest
✔ What should be the project name and where should it be generated? · api-feature-home-block @ libs/api/feature-home-block (This was derived from the folder structure. Please provide the exact name and directory in the future)
```

* delete created files in `libs/api/feature-home-block/src/lib`

```bash
nx g @nrwl/nest:resource --project=api-feature-home-block --type="graphql-code-first" --crud --name home-block
```

* move the files in home-block(except dto, entities) to lib folder
  _from_  
 `libs/api/feature-home-block/src/home-block`

_to_  
 `libs/api/feature-home-block/src/lib`

* delete home-block folder
  delete `libs/api/feature-home-block/src/home-block`

## generate db types

 `package.json`

```json
    "sereve:all": "npx concurrently --kill-others-on-fail \"npm:start:*\"",
```

> Above serve:all command contains start:db:watch, so that it can create (or update) `libs/api/generated-db-types/src/index.ts` .

> "Automated generation is convenient, but not recommended for large projects. In such cases, it's better to create custom 'entities' and 'dto' folders and manually create the files."

## update module

* fix export

ex.

```ts
export * from './lib/home-block.module';
```

## update resolver

* fix import error, change method name correctly etc

 `libs/api/feature-home-block/src/lib/home-block.resolver.ts`

## update module

* add _PrismaService_ in providers

## update service

* add DI _PrismaService_ on constructor
* fix or update method

## add module on AppModule

 `apps/api/src/app/app.module.ts`

* add HomeBlockModule in imports of AppModule

## add query to data-access.gql

 `libs/web/data-access-graphql/src/lib/data-access.gql.ts`

ex.

```ts
const GET_HOME_BLOCKS = gql`
  query GetHomeImages {
    homeBlocks {
      id
      title
      imagePath
      navigationPath
      rgbBackground {
        r
        g
        b
      }
    }
  }
`;
```

## run graphql-codegen

update `data-access.gql.gen.ts`

 `package.json`

```json
    "start:gql:watch": "graphql-codegen --config tools/graphql-codegen/codegen.yml --watch",
```

## use gql. GetHomeImages

ex.

 `page.tsx`

```tsx
import { gql } from '../data-access/graphql-client';

export default async function Page() {
  const { homeBlocks } = await gql.GetHomeImages();

  return homeBlocks.map((homeBlock) => (
```
