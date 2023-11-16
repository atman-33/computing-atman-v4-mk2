# api-mongoose-feature-sample-mongoose

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build api-mongoose-feature-sample-mongoose` to build the library.

## Running unit tests

Run `nx test api-mongoose-feature-sample-mongoose` to execute the unit tests via [Jest](https://jestjs.io).

## Graphql Sample

```graphql
query getSampleTodos {
  sampleTodos {
    _id
    content
    editing
    completed
  }
}

mutation createSampleTodo1 {
  createSampleTodo(createSampleTodoData: { content: "洗濯", editing: false, completed: true }) {
    _id
    content
    editing
    completed
  }
}

mutation createSampleTodo2 {
  createSampleTodo(createSampleTodoData: { content: "掃除", editing: false, completed: false }) {
    _id
    content
    editing
    completed
  }
}

mutation updateSampleTodo {
  updateSampleTodo(
    updateSampleTodoData: {
      _id: "6547473eac326c3ca75ff696"
      content: "洗濯2"
      editing: false
      completed: true
    }
  ) {
    _id
    content
    editing
    completed
  }
}

mutation deleteSampleTodo {
  deleteSampleTodo(deleteSampleTodoArgs: { _id: "6547473eac326c3ca75ff696" }) {
    _id
  }
}
```
