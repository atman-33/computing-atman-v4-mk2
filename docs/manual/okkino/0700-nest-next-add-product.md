# NestJS

## generate feature-product

* create files

```bash
npx nx generate @nx/js:library api-feature-product --directory=libs/api/feature-product --importPath=@libs/api/feature-product --tags=scope:api --bundler=swc

✔ Which unit test runner would you like to use? · jest
✔ What should be the project name and where should it be generated? · api-feature-product @ libs/api/feature-product

nx g @nrwl/nest:resource --project=api-feature-product --type="graphql-code-first" --crud --name product
```

* move module, resolver and service files to lib folder

* delete `product` folder

* delete `api-feature-product.ts and spec` files

* fix export in index.ts

## update files

* update `product.resolever.ts` as using generated-db-types

* update `product.service.ts` as using PrismaService

* update `product.module` as adding PrismaService to providers

## add module to AppModule

add ProductModule in imports

 `apps/api/src/app/app.module.ts`

## add query

 `libs/web/data-access-graphql/src/lib/data-access.gql.ts`

---

# Nextjs

## use query in client

* `apps/web/app/[lang]/shop/page.tsx`
* `apps/web/app/[lang]/shop/components/product-colors.tsx`
