# api-feature-sample-mongoose-table

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build api-feature-sample-mongoose-table` to build the library.

## Running unit tests

Run `nx test api-feature-sample-mongoose-table` to execute the unit tests via [Jest](https://jestjs.io).

## Graphql Sample

```graphql
query getSampleMongooseTables{
  sampleMongooseTables{
    _id
    text
    value
  }
}

mutation createSampleMongooseTable{
  createSampleMongooseTable(
    createSampleMongooseTableData: {
      text: "test3"
      value: 3
    }
  ){
    _id
    text
    value
  }
}

mutation updateSampleMongooseTable{
  updateSampleMongooseTable(
    updateSampleMongooseTableData:{
      _id: "653df617fe274cafc72b531e"
      text: "test03"
      value: 33
    }
  ){
    _id
    text
    value
  }
}

mutation deleteSampleMongooseTable{
  deleteSampleMongooseTable(
    deleteSampleMongooseTableArgs: {
    _id: "653df617fe274cafc72b531e"
    }
  ){
    _id
  }
}
```