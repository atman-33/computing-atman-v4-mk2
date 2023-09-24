## generate feature(ex. feature-sample)

```bash
npx nx generate @nx/js:library api-feature-sample --directory=libs/api/feature-sample --importPath=@libs/api/feature-sample --tags=scope:api --bundler=swc

✔ Which unit test runner would you like to use? · jest
```

### delete files

* `api-feature-user.spec.ts`
* `api-feature-user.ts`

### generate resolver

```bash
nx g @nrwl/nest:resource --project=api-feature-sample --directory=lib --type="graphql-code-first" --crud --name sample
```

### arange

* move to generated files to lib folder
* delete user folder
* delete dto folder
* delete entities folder
* fix export in index.ts

```ts
export * from './lib/sample.module';
```

### update sample.module.ts

add PrismaModule to sample.module.ts

```ts
...
@Module({
  providers: [SampleResolver, SampleService],
  imports: [PrismaModule]
})
...
```

### update sample.resolver.ts

* change method name: findAll() => samples()
* change method name: findOne() => sample()
* change args, types as generated-db-types names

### update sample.service.ts

* add di PrismaService
* change methods to use PrismaService
* change args, types as generated-db-types names

> If you need relation to get another table data, not forget to use include!

### add SampleModule to AppModule

add SampleModule to AppModule

after that, run Nestjs and check runngin Graphql!
