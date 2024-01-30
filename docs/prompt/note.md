
schema.prisma ファイルを読み込んで、modelの情報を読み込むjavascriptコードを書いて下さい。

例えば、下記の schema.prisma ファイルがあるとします。

```
generator client {
    provider = "prisma-client-js"
}

datasource db {
    // provider = "postgresql"
    provider = "mongodb"
    url      = env("DB_URL")
}

generator nestgraphql {
    provider                = "node node_modules/prisma-nestjs-graphql"
    output                  = "./@generated"
    noAtomicOperations      = true
    combineScalarFilters    = true
    reExport                = Single
    emitSingle              = false
    emitCompiled            = false
    purgeOutput             = false
    // field validator
    fields_Validator_from   = "class-validator"
    fields_Validator_input  = true
    fields_Validator_output = true
    fields_Validator_model  = true
    // Args where|data nested validator
    decorate_1_type         = "*Args"
    decorate_1_field        = "@(data|where)"
    decorate_1_name         = ValidateNested
    decorate_1_from         = "class-validator"
    decorate_1_arguments    = "[]"
}

model SampleTodo {
    id        String  @id @default(auto()) @map("_id") @db.ObjectId
    content   String
    editing   Boolean
    completed Boolean
}

model SampleUser {
    id             String   @id @default(auto()) @map("_id") @db.ObjectId
    username       String
    age            Int
    hobbies        String[]
    premiumAccount Boolean
}
```

このファイルを読み込み、ファイルに含まれているモデルを解析する事で、
モデル毎のjsonオブジェクトを生成してください。

例えば、上記の場合は、下記jsonオブジェクトが生成される例となります。
（SampleUser モデルの例は省略しています。）

```
[
  {
    model: "SampleTodo",
    columns: [
      {
        name: "id",
        type: "string"
        key: 1
      },
      {
        name: "content",
        type: "string"
        key: 0
      },
      {
        name: "editing",
        type: "boolean"
        key: 0
      },
      {
        name: "completed",
        type: "string"
        key: 0
      }
    ]
  }
]
```
