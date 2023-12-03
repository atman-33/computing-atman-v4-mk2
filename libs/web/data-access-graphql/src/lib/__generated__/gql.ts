/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query getSampleUsers {\n  sampleUsers {\n    _id\n    username\n    age\n    hobbies\n    premiumAccount\n  }\n}": types.GetSampleUsersDocument,
    "query getSampleTodos {\n  sampleTodos {\n    _id\n    content\n    editing\n    completed\n  }\n}\n\nmutation createSampleTodo($createSampleTodoData: CreateSampleTodoInput!) {\n  createSampleTodo(createSampleTodoData: $createSampleTodoData) {\n    _id\n    content\n    editing\n    completed\n  }\n}\n\nmutation deleteSampleTodo($deleteSampleTodoData: DeleteSampleTodoInput!) {\n  deleteSampleTodo(deleteSampleTodoData: $deleteSampleTodoData) {\n    _id\n  }\n}\n\nmutation updateSampleTodo($updateSampleTodoData: UpdateSampleTodoInput!) {\n  updateSampleTodo(updateSampleTodoData: $updateSampleTodoData) {\n    _id\n    content\n    editing\n    completed\n  }\n}": types.GetSampleTodosDocument,
    "mutation createUser($createUserData: CreateUserInput!) {\n  createUser(createUserData: $createUserData) {\n    _id\n    email\n  }\n}\n\nquery getCurrentUser {\n  currentUser {\n    _id\n    email\n  }\n}": types.CreateUserDocument,
    "mutation createBookmark($createBookmarkData: CreateBookmarkInput!) {\n  createBookmark(createBookmarkData: $createBookmarkData) {\n    _id\n    name\n    userId\n  }\n}\n\nquery getBookmarks {\n  bookmarks {\n    _id\n    name\n    userId\n    links\n  }\n}": types.CreateBookmarkDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getSampleUsers {\n  sampleUsers {\n    _id\n    username\n    age\n    hobbies\n    premiumAccount\n  }\n}"): (typeof documents)["query getSampleUsers {\n  sampleUsers {\n    _id\n    username\n    age\n    hobbies\n    premiumAccount\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getSampleTodos {\n  sampleTodos {\n    _id\n    content\n    editing\n    completed\n  }\n}\n\nmutation createSampleTodo($createSampleTodoData: CreateSampleTodoInput!) {\n  createSampleTodo(createSampleTodoData: $createSampleTodoData) {\n    _id\n    content\n    editing\n    completed\n  }\n}\n\nmutation deleteSampleTodo($deleteSampleTodoData: DeleteSampleTodoInput!) {\n  deleteSampleTodo(deleteSampleTodoData: $deleteSampleTodoData) {\n    _id\n  }\n}\n\nmutation updateSampleTodo($updateSampleTodoData: UpdateSampleTodoInput!) {\n  updateSampleTodo(updateSampleTodoData: $updateSampleTodoData) {\n    _id\n    content\n    editing\n    completed\n  }\n}"): (typeof documents)["query getSampleTodos {\n  sampleTodos {\n    _id\n    content\n    editing\n    completed\n  }\n}\n\nmutation createSampleTodo($createSampleTodoData: CreateSampleTodoInput!) {\n  createSampleTodo(createSampleTodoData: $createSampleTodoData) {\n    _id\n    content\n    editing\n    completed\n  }\n}\n\nmutation deleteSampleTodo($deleteSampleTodoData: DeleteSampleTodoInput!) {\n  deleteSampleTodo(deleteSampleTodoData: $deleteSampleTodoData) {\n    _id\n  }\n}\n\nmutation updateSampleTodo($updateSampleTodoData: UpdateSampleTodoInput!) {\n  updateSampleTodo(updateSampleTodoData: $updateSampleTodoData) {\n    _id\n    content\n    editing\n    completed\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation createUser($createUserData: CreateUserInput!) {\n  createUser(createUserData: $createUserData) {\n    _id\n    email\n  }\n}\n\nquery getCurrentUser {\n  currentUser {\n    _id\n    email\n  }\n}"): (typeof documents)["mutation createUser($createUserData: CreateUserInput!) {\n  createUser(createUserData: $createUserData) {\n    _id\n    email\n  }\n}\n\nquery getCurrentUser {\n  currentUser {\n    _id\n    email\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation createBookmark($createBookmarkData: CreateBookmarkInput!) {\n  createBookmark(createBookmarkData: $createBookmarkData) {\n    _id\n    name\n    userId\n  }\n}\n\nquery getBookmarks {\n  bookmarks {\n    _id\n    name\n    userId\n    links\n  }\n}"): (typeof documents)["mutation createBookmark($createBookmarkData: CreateBookmarkInput!) {\n  createBookmark(createBookmarkData: $createBookmarkData) {\n    _id\n    name\n    userId\n  }\n}\n\nquery getBookmarks {\n  bookmarks {\n    _id\n    name\n    userId\n    links\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;