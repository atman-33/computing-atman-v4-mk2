# api-feature-sample-todo

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build api-feature-sample-todo` to build the library.

## Running unit tests

Run `nx test api-feature-sample-todo` to execute the unit tests via [Jest](https://jestjs.io).

## Graphql Sample

```graphql
query getSampleTodos {
  sampleTodos{
    _id
    title
    editing
    completed
  }
}

mutation createSampleTodo1 {
  createSampleTodo(
    createSampleTodoData: {
      title: "洗濯"
      editing: false
      completed: true      
    }
  ){
		_id
    title
    editing
    completed
  }
}

mutation createSampleTodo2 {
  createSampleTodo(
    createSampleTodoData: {
      title: "掃除"
      editing: false
      completed: false      
    }
  ){
		_id
    title
    editing
    completed
  }
}

mutation updateSampleTodo{
  updateSampleTodo(
    updateSampleTodoData:{
      _id: "6547473eac326c3ca75ff696"
      title: "洗濯2"
      editing: false
      completed: true
    }
  ){
    _id
    title
    editing
    completed
  }
}

mutation deleteSampleTodo{
  deleteSampleTodo(
    deleteSampleTodoArgs: {
    _id: "6547473eac326c3ca75ff696"
    }
  ){
    _id
  }
}
```