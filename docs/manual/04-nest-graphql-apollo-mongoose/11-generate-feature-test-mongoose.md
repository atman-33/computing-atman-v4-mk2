## Generate feature-test-mongoose

```bash
npx nx generate @nx/js:library api-feature-test-mongoose --directory=libs/api/feature-test-mongoose --importPath=@libs/api/feature-test-mongoose --tags=scope:api --bundler=swc

✔ Which unit test runner would you like to use? · jest
```

## Create module, resolver and service

```bash
nx generate @nx/nest:module test-mongoose --project=api-feature-test-mongoose
nx generate @nx/nest:resolver test-mongoose --project=api-feature-test-mongoose
nx generate @nx/nest:service test-mongoose --project=api-feature-test-mongoose
```

After the files created, move the files to lib folder.
And then delete `test-mongoose` folder.

## Create document (schema) for MongoDB

 `libs/api/feature-test-mongoose/src/lib/models/test-mongoose.schema.ts`

## Create model for Graphql

 `libs/api/feature-test-mongoose/src/lib/models/test-mongoose.model.ts`

## Craete repository

 `libs/api/feature-test-mongoose/src/lib/test-mongoose.repository.ts`

## Create dto

args/

 `libs/api/feature-test-mongoose/src/lib/dto/args/get-test-mongoose-args.dto.ts`

input/

 `libs/api/feature-test-mongoose/src/lib/dto/input/create-test-mongoose-input.dto.ts`

 `libs/api/feature-test-mongoose/src/lib/dto/input/delete-test-mongoose-input.dto.ts`

 `libs/api/feature-test-mongoose/src/lib/dto/input/update-test-mongoose-input.dto.ts`

## Update service

 `libs/api/feature-test-mongoose/src/lib/test-mongoose.service.ts`

## Update resolver

 `libs/api/feature-test-mongoose/src/lib/test-mongoose.resolver.ts`

## Update module

 `libs/api/feature-test-mongoose/src/lib/test-mongoose.module.ts`

* Add MongooseModule.
* Add TestMongooseRepository to providers.

## Update app.module.ts

 `apps/api/src/app/app.module.ts`

* Add DatabaseModule.

> DatabaseModule is `libs/api/mongoose/shared/src/lib/database/database.module.ts` .

* Add TestMongooseModule.

```ts
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'web/.next'),
      exclude: ['/api/*', '/api/graphql']
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      path: '/api/graphql',
      autoSchemaFile: true
    }),
    // ---- Graphql ---- //
    // When using Mongoose, the DatabaseModule is required.
    DatabaseModule,
    TestMongooseModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
```
