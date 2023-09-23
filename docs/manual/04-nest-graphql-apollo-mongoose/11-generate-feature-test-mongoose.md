## Generate feature-test-mongoose

```bash
npx nx generate @nx/js:library api-feature-test-mongoose --directory=libs/api/feature-test-mongoose --importPath=@libs/api/feature-test-mongoose --tags=scope:api --bundler=swc

✔ Which unit test runner would you like to use? · jest
```

## Create module, resolver and service

```bash
nx generate @nx/nest:module app/<module-name> --project=server
nx generate @nx/nest:resolver app/<resolver-name> --project=server
nx generate @nx/nest:service app/<service-name> --project=server
```
