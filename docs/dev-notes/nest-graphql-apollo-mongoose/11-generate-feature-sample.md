## Generate feature-sample-todos

```bash
npx nx generate @nx/js:library api-feature-sample-todos --directory=libs/api/mongoose/feature-sample-mongoose --importPath=@libs/api/mongoose/feature-sample-mongoose --tags=scope:api --bundler=swc

✔ Which unit test runner would you like to use? · jest
```

## Create module, resolver and service

```bash
nx generate @nx/nest:module sample-todos --project=api-feature-sample-todos
nx generate @nx/nest:resolver sample-todos --project=api-feature-sample-todos
nx generate @nx/nest:service sample-todos --project=api-feature-sample-todos
```

After the files created, move the files to lib folder.

## Create document (schema) for MongoDB

 `libs/api/feature-sample-todos/src/lib/sample-todos/models/sample-todos.schema.ts`

## Create model for Graphql

 `libs/api/feature-sample-todos/src/lib/sample-todos/models/sample-todos.model.ts`

## Craete repository

 `libs/api/feature-sample-todos/src/lib/sample-todos/sample-todos.repository.ts`

## Create dto

args/

 `libs/api/feature-sample-todos/src/lib/sample-todos/dto/args/get-sample-todos-args.dto.ts`

input/

 `libs/api/feature-sample-todos/src/lib/sample-todos/dto/input/create-sample-todos-input.dto.ts`

 `libs/api/feature-sample-todos/src/lib/sample-todos/dto/input/delete-sample-todos-input.dto.ts`

 `libs/api/feature-sample-todos/src/lib/sample-todos/dto/input/update-sample-todos-input.dto.ts`

## Update service

 `libs/api/feature-sample-todos/src/lib/sample-todos/sample-todos.service.ts`

## Update resolver

 `libs/api/feature-sample-todos/src/lib/sample-todos/sample-todos.resolver.ts`

## Update module

 `libs/api/feature-sample-todos/src/lib/sample-todos/sample-todos.module.ts`

* Add MongooseModule.
* Add SampleMongooseTableRepository to providers.

## Update app.module.ts

 `apps/api/src/app/app.module.ts`

* Add DatabaseModule.

> DatabaseModule is `libs/api/mongoose/shared/src/lib/database/database.module.ts` .

* Add SampleTodosModule.

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
    SampleTodosModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
```
