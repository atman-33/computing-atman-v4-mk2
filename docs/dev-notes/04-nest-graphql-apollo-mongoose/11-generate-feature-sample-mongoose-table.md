## Generate feature-sample-mongoose-table

```bash
npx nx generate @nx/js:library api-feature-sample-mongoose-table --directory=libs/api/feature-sample-mongoose-table --importPath=@libs/api/feature-sample-mongoose-table --tags=scope:api --bundler=swc

✔ Which unit test runner would you like to use? · jest
```

## Create module, resolver and service

```bash
nx generate @nx/nest:module sample-mongoose-table --project=api-feature-sample-mongoose-table
nx generate @nx/nest:resolver sample-mongoose-table --project=api-feature-sample-mongoose-table
nx generate @nx/nest:service sample-mongoose-table --project=api-feature-sample-mongoose-table
```

After the files created, move the files to lib folder.
And then delete `sample-mongoose-table` folder.

## Create document (schema) for MongoDB

 `libs/api/feature-sample-mongoose-table/src/lib/models/sample-mongoose-table.schema.ts`

## Create model for Graphql

 `libs/api/feature-sample-mongoose-table/src/lib/models/sample-mongoose-table.model.ts`

## Craete repository

 `libs/api/feature-sample-mongoose-table/src/lib/sample-mongoose-table.repository.ts`

## Create dto

args/

 `libs/api/feature-sample-mongoose-table/src/lib/dto/args/get-sample-mongoose-table-args.dto.ts`

input/

 `libs/api/feature-sample-mongoose-table/src/lib/dto/input/create-sample-mongoose-table-input.dto.ts`

 `libs/api/feature-sample-mongoose-table/src/lib/dto/input/delete-sample-mongoose-table-input.dto.ts`

 `libs/api/feature-sample-mongoose-table/src/lib/dto/input/update-sample-mongoose-table-input.dto.ts`

## Update service

 `libs/api/feature-sample-mongoose-table/src/lib/sample-mongoose-table.service.ts`

## Update resolver

 `libs/api/feature-sample-mongoose-table/src/lib/sample-mongoose-table.resolver.ts`

## Update module

 `libs/api/feature-sample-mongoose-table/src/lib/sample-mongoose-table.module.ts`

* Add MongooseModule.
* Add SampleMongooseTableRepository to providers.

## Update app.module.ts

 `apps/api/src/app/app.module.ts`

* Add DatabaseModule.

> DatabaseModule is `libs/api/mongoose/shared/src/lib/database/database.module.ts` .

* Add SampleMongooseTableModule.

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
    SampleMongooseTableModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
```
