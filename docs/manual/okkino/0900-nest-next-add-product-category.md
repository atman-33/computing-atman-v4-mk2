## add product-category model

* add product-category model to `libs/api/data-access-db/src/lib/schema.prisma`
* db migrate

## add seed-data.prod

 `tools/database/seed-data.prod.ts`

## update seed.dev.ts

add Promise.all PRODUCT_CATEGORIES

 `tools/database/seed.dev.ts`

## update seed-data.ts

add productCategories to PRODUCT_DATA

 `tools/database/seed-data.ts`

## run db seed script

```json
"db:seed:dev": "npx env-cmd -f .env.local ts-node --project tools/tsconfig.tools.json tools/database/seed.dev.ts",
```

## generate feature-product-category

```bash
npx nx generate @nx/js:library api-feature-product-category --directory=libs/api/feature-product-category --importPath=@libs/api/feature-product-category --tags=scope:api --bundler=swc

✔ Which unit test runner would you like to use? · jest
```

```bash
nx g @nrwl/nest:resource --project=api-feature-product-category --type="graphql-code-first" --crud --name product-category
```

and then do following.

* delete no need files.
* fix export in index.ts.
* update AppModule(NestJS).
* update resolver.
* update service.
* add PrismaService to providers in module.
* add gql.
* run graphql-codegen.

## generate feature-product-length

```bash
npx nx generate @nx/js:library api-feature-product-length --directory=libs/api/feature-product-length --importPath=@libs/api/feature-product-length --tags=scope:api --bundler=swc
```

> do it as usual

---

# Nextjs

## add product-category

 `apps/web/app/[lang]/layout.tsx`

## add menu

 `apps/web/app/[lang]/components/menu`
