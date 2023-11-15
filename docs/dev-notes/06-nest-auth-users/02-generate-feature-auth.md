## Generate feature-auth

```bash
npx nx generate @nx/js:library api-feature-auth --directory=libs/api/feature-auth --importPath=@libs/api/feature-auth --tags=scope:api --bundler=swc

✔ Which unit test runner would you like to use? · jest
```

## Create module, controller and service

```bash
nx generate @nx/nest:module auth --project=api-feature-auth
nx generate @nx/nest:resolver auth --project=api-feature-auth
nx generate @nx/nest:service auth --project=api-feature-auth
```