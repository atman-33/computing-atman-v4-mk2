## Install packages

```bash
npm i @nestjs/mongoose mongoose
```

## Genarate project

```bash
npx nx generate @nx/js:library api-mongoose-shared --directory=libs/api/mongoose/shared --importPath=@libs/api/mongoose/shared --tags=scope:api --bundler=swc

✔ Which unit test runner would you like to use? · none
```

## Create files

connecton/

* connection-args.dto.ts
* connection-query-args.dto.ts
* connection.model.ts

database/

* abstract.repostory.ts
* abstract.schema.ts
* database.module.ts

model/

* abstract.model.ts
