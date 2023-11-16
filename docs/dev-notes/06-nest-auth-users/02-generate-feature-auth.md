## Generate feature-auth

```bash
npx nx generate @nx/js:library api-feature-auth --directory=libs/api/feature-auth --importPath=@libs/api/feature-auth --tags=scope:api --bundler=swc

✔ Which unit test runner would you like to use? · jest
```

## Create module, controller and service

```bash
nx generate @nx/nest:module auth --project=api-feature-auth
nx generate @nx/nest:controller auth --project=api-feature-auth
nx generate @nx/nest:service auth --project=api-feature-auth
```

## Update service

- update `auth.service.ts`

## Create current user decorator

- create `current-user.decorator.ts`

## Update controller

- update `auth.controller.ts`

## Create guard

- create `gql-auth.guard.ts`
- create `jwt-auth.guard.ts`
- create `local-auth.guard.ts`

## Create strategy

- create `jwt.strategy.ts`
- create `local.strategy.ts`

## Update module

- update `auth.module.ts`

## Update index.ts

```ts
export * from './lib/auth.module';
export { CurrentUser } from './lib/current-user.decorator';
export { GqlAuthGuard } from './lib/guards/gql-auth.guard';
```