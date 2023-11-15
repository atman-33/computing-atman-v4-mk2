## Generate feature-users

```bash
npx nx generate @nx/js:library api-feature-users --directory=libs/api/feature-users --importPath=@libs/api/feature-users --tags=scope:api --bundler=swc

✔ Which unit test runner would you like to use? · jest
```

## Create module, resolver and service

```bash
nx generate @nx/nest:module users --project=api-feature-users
nx generate @nx/nest:resolver users --project=api-feature-users
nx generate @nx/nest:service users --project=api-feature-users
```

After the files created, move the files to lib folder.
And then delete `users` folder.

## Create models

- create `user.model.ts`
- create `user.schema.ts`

## Create dto

- create `dto/args/get-user-args.dto.ts`
- create `dto/input/create-use-input.dto.ts`

## Create repository

- create `users.repository.ts`

## Update service

install bcrypt

```bash
npm i bcrypt
npm i --save-dev @types/bcrypt
```

- update `users.service.ts`

## Update resolver

- update `users.resolver.ts`