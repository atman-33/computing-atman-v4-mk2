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