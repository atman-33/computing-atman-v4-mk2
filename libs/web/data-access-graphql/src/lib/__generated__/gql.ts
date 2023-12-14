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
    "query getSampleUsers {\n  sampleUsers {\n    id\n    username\n    age\n    hobbies\n    premiumAccount\n  }\n}": types.GetSampleUsersDocument,
    "query getSampleTodos {\n  sampleTodos {\n    id\n    content\n    editing\n    completed\n  }\n}\n\nmutation createSampleTodo($data: SampleTodoCreateInput!) {\n  createSampleTodo(data: $data) {\n    id\n    content\n    editing\n    completed\n  }\n}\n\nmutation deleteSampleTodo($where: SampleTodoWhereUniqueInput!) {\n  deleteSampleTodo(where: $where) {\n    id\n  }\n}\n\nmutation updateSampleTodo($data: SampleTodoUpdateInput!, $where: SampleTodoWhereUniqueInput!) {\n  updateSampleTodo(data: $data, where: $where) {\n    id\n    content\n    editing\n    completed\n  }\n}": types.GetSampleTodosDocument,
    "mutation createUser($data: UserCreateInput!) {\n  createUser(data: $data) {\n    id\n    email\n  }\n}\n\nquery getCurrentUser {\n  currentUser {\n    id\n    email\n  }\n}": types.CreateUserDocument,
    "mutation createBookmark($createBookmarkData: CreateBookmarkInput!) {\n  createBookmark(createBookmarkData: $createBookmarkData) {\n    id\n    name\n    userId\n  }\n}\n\nquery getBookmarks {\n  bookmarks {\n    id\n    name\n    userId\n  }\n}\n\nquery getBookmark($where: BookmarkWhereUniqueInput!) {\n  bookmark(where: $where) {\n    id\n    name\n    links {\n      url\n      title\n      siteName\n      description\n      image\n    }\n  }\n}": types.CreateBookmarkDocument,
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
export function graphql(source: "query getSampleUsers {\n  sampleUsers {\n    id\n    username\n    age\n    hobbies\n    premiumAccount\n  }\n}"): (typeof documents)["query getSampleUsers {\n  sampleUsers {\n    id\n    username\n    age\n    hobbies\n    premiumAccount\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getSampleTodos {\n  sampleTodos {\n    id\n    content\n    editing\n    completed\n  }\n}\n\nmutation createSampleTodo($data: SampleTodoCreateInput!) {\n  createSampleTodo(data: $data) {\n    id\n    content\n    editing\n    completed\n  }\n}\n\nmutation deleteSampleTodo($where: SampleTodoWhereUniqueInput!) {\n  deleteSampleTodo(where: $where) {\n    id\n  }\n}\n\nmutation updateSampleTodo($data: SampleTodoUpdateInput!, $where: SampleTodoWhereUniqueInput!) {\n  updateSampleTodo(data: $data, where: $where) {\n    id\n    content\n    editing\n    completed\n  }\n}"): (typeof documents)["query getSampleTodos {\n  sampleTodos {\n    id\n    content\n    editing\n    completed\n  }\n}\n\nmutation createSampleTodo($data: SampleTodoCreateInput!) {\n  createSampleTodo(data: $data) {\n    id\n    content\n    editing\n    completed\n  }\n}\n\nmutation deleteSampleTodo($where: SampleTodoWhereUniqueInput!) {\n  deleteSampleTodo(where: $where) {\n    id\n  }\n}\n\nmutation updateSampleTodo($data: SampleTodoUpdateInput!, $where: SampleTodoWhereUniqueInput!) {\n  updateSampleTodo(data: $data, where: $where) {\n    id\n    content\n    editing\n    completed\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation createUser($data: UserCreateInput!) {\n  createUser(data: $data) {\n    id\n    email\n  }\n}\n\nquery getCurrentUser {\n  currentUser {\n    id\n    email\n  }\n}"): (typeof documents)["mutation createUser($data: UserCreateInput!) {\n  createUser(data: $data) {\n    id\n    email\n  }\n}\n\nquery getCurrentUser {\n  currentUser {\n    id\n    email\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation createBookmark($createBookmarkData: CreateBookmarkInput!) {\n  createBookmark(createBookmarkData: $createBookmarkData) {\n    id\n    name\n    userId\n  }\n}\n\nquery getBookmarks {\n  bookmarks {\n    id\n    name\n    userId\n  }\n}\n\nquery getBookmark($where: BookmarkWhereUniqueInput!) {\n  bookmark(where: $where) {\n    id\n    name\n    links {\n      url\n      title\n      siteName\n      description\n      image\n    }\n  }\n}"): (typeof documents)["mutation createBookmark($createBookmarkData: CreateBookmarkInput!) {\n  createBookmark(createBookmarkData: $createBookmarkData) {\n    id\n    name\n    userId\n  }\n}\n\nquery getBookmarks {\n  bookmarks {\n    id\n    name\n    userId\n  }\n}\n\nquery getBookmark($where: BookmarkWhereUniqueInput!) {\n  bookmark(where: $where) {\n    id\n    name\n    links {\n      url\n      title\n      siteName\n      description\n      image\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;