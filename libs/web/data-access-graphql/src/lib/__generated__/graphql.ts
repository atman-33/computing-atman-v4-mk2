/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type DateString = string & { readonly __brand: unique symbol }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: Date; output: Date; }
};

export type Bookmark = {
  id: Scalars['ID']['output'];
  links: Maybe<Array<Scalars['String']['output']>>;
  name: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type BookmarkCountAggregate = {
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  links: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type BookmarkCreateInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  links?: InputMaybe<Array<Scalars['String']['input']>>;
  name: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type BookmarkMaxAggregate = {
  id: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  userId: Maybe<Scalars['String']['output']>;
};

export type BookmarkMinAggregate = {
  id: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  userId: Maybe<Scalars['String']['output']>;
};

export type BookmarkUpdateInput = {
  links?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type BookmarkWhereInput = {
  AND?: InputMaybe<Array<BookmarkWhereInput>>;
  NOT?: InputMaybe<Array<BookmarkWhereInput>>;
  OR?: InputMaybe<Array<BookmarkWhereInput>>;
  id?: InputMaybe<StringFilter>;
  links?: InputMaybe<StringListFilter>;
  name?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type BookmarkWhereUniqueInput = {
  AND?: InputMaybe<Array<BookmarkWhereInput>>;
  NOT?: InputMaybe<Array<BookmarkWhereInput>>;
  OR?: InputMaybe<Array<BookmarkWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  links?: InputMaybe<StringListFilter>;
  name?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BoolFilter>;
};

export type DummyAvgAggregate = {
  bigInt: Maybe<Scalars['Float']['output']>;
  float: Maybe<Scalars['Float']['output']>;
  int: Maybe<Scalars['Float']['output']>;
};

export type DummyCountAggregate = {
  _all: Scalars['Int']['output'];
  bigInt: Scalars['Int']['output'];
  bytes: Scalars['Int']['output'];
  date: Scalars['Int']['output'];
  float: Scalars['Int']['output'];
  friends: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  int: Scalars['Int']['output'];
  json: Scalars['Int']['output'];
};

export type DummyMaxAggregate = {
  bigInt: Maybe<Scalars['String']['output']>;
  bytes: Maybe<Scalars['String']['output']>;
  date: Maybe<Scalars['DateTime']['output']>;
  float: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['String']['output']>;
  int: Maybe<Scalars['Int']['output']>;
};

export type DummyMinAggregate = {
  bigInt: Maybe<Scalars['String']['output']>;
  bytes: Maybe<Scalars['String']['output']>;
  date: Maybe<Scalars['DateTime']['output']>;
  float: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['String']['output']>;
  int: Maybe<Scalars['Int']['output']>;
};

export type DummySumAggregate = {
  bigInt: Maybe<Scalars['String']['output']>;
  float: Maybe<Scalars['Float']['output']>;
  int: Maybe<Scalars['Int']['output']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Link = {
  description: Maybe<Scalars['String']['output']>;
  images: Maybe<Array<Scalars['String']['output']>>;
  siteName: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Mutation = {
  createBookmark: Bookmark;
  createSampleTodo: SampleTodo;
  createSampleUser: SampleUser;
  createUser: User;
  deleteBookmark: Maybe<Bookmark>;
  deleteSampleTodo: SampleTodo;
  deleteSampleUser: SampleUser;
  updateBookmark: Bookmark;
  updateSampleTodo: SampleTodo;
  updateSampleUser: SampleUser;
};


export type MutationCreateBookmarkArgs = {
  data: BookmarkCreateInput;
};


export type MutationCreateSampleTodoArgs = {
  data: SampleTodoCreateInput;
};


export type MutationCreateSampleUserArgs = {
  data: SampleUserCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteBookmarkArgs = {
  where: BookmarkWhereUniqueInput;
};


export type MutationDeleteSampleTodoArgs = {
  where: SampleTodoWhereUniqueInput;
};


export type MutationDeleteSampleUserArgs = {
  where: SampleUserWhereUniqueInput;
};


export type MutationUpdateBookmarkArgs = {
  data: BookmarkUpdateInput;
  where: BookmarkWhereUniqueInput;
};


export type MutationUpdateSampleTodoArgs = {
  data: SampleTodoUpdateInput;
  where: SampleTodoWhereUniqueInput;
};


export type MutationUpdateSampleUserArgs = {
  data: SampleUserUpdateInput;
  where: SampleUserWhereUniqueInput;
};

export type Query = {
  bookmark: Bookmark;
  bookmarks: Array<Bookmark>;
  currentUser: User;
  links: Array<Link>;
  sampleTodo: SampleTodo;
  sampleTodos: Array<SampleTodo>;
  sampleUser: SampleUser;
  sampleUsers: Array<SampleUser>;
  user: User;
};


export type QueryBookmarkArgs = {
  where: BookmarkWhereUniqueInput;
};


export type QueryLinksArgs = {
  urls: Array<Scalars['String']['input']>;
};


export type QuerySampleTodoArgs = {
  where: SampleTodoWhereUniqueInput;
};


export type QuerySampleUserArgs = {
  where: SampleUserWhereUniqueInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryMode =
  | 'default'
  | 'insensitive';

export type SampleTodo = {
  completed: Scalars['Boolean']['output'];
  content: Scalars['String']['output'];
  editing: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
};

export type SampleTodoCountAggregate = {
  _all: Scalars['Int']['output'];
  completed: Scalars['Int']['output'];
  content: Scalars['Int']['output'];
  editing: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
};

export type SampleTodoCreateInput = {
  completed: Scalars['Boolean']['input'];
  content: Scalars['String']['input'];
  editing: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
};

export type SampleTodoMaxAggregate = {
  completed: Maybe<Scalars['Boolean']['output']>;
  content: Maybe<Scalars['String']['output']>;
  editing: Maybe<Scalars['Boolean']['output']>;
  id: Maybe<Scalars['String']['output']>;
};

export type SampleTodoMinAggregate = {
  completed: Maybe<Scalars['Boolean']['output']>;
  content: Maybe<Scalars['String']['output']>;
  editing: Maybe<Scalars['Boolean']['output']>;
  id: Maybe<Scalars['String']['output']>;
};

export type SampleTodoUpdateInput = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  editing?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SampleTodoWhereInput = {
  AND?: InputMaybe<Array<SampleTodoWhereInput>>;
  NOT?: InputMaybe<Array<SampleTodoWhereInput>>;
  OR?: InputMaybe<Array<SampleTodoWhereInput>>;
  completed?: InputMaybe<BoolFilter>;
  content?: InputMaybe<StringFilter>;
  editing?: InputMaybe<BoolFilter>;
  id?: InputMaybe<StringFilter>;
};

export type SampleTodoWhereUniqueInput = {
  AND?: InputMaybe<Array<SampleTodoWhereInput>>;
  NOT?: InputMaybe<Array<SampleTodoWhereInput>>;
  OR?: InputMaybe<Array<SampleTodoWhereInput>>;
  completed?: InputMaybe<BoolFilter>;
  content?: InputMaybe<StringFilter>;
  editing?: InputMaybe<BoolFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type SampleUser = {
  age: Scalars['Int']['output'];
  hobbies: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['ID']['output'];
  premiumAccount: Scalars['Boolean']['output'];
  username: Scalars['String']['output'];
};

export type SampleUserAvgAggregate = {
  age: Maybe<Scalars['Float']['output']>;
};

export type SampleUserCountAggregate = {
  _all: Scalars['Int']['output'];
  age: Scalars['Int']['output'];
  hobbies: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  premiumAccount: Scalars['Int']['output'];
  username: Scalars['Int']['output'];
};

export type SampleUserCreateInput = {
  age: Scalars['Int']['input'];
  hobbies?: InputMaybe<Array<Scalars['String']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  premiumAccount: Scalars['Boolean']['input'];
  username: Scalars['String']['input'];
};

export type SampleUserMaxAggregate = {
  age: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['String']['output']>;
  premiumAccount: Maybe<Scalars['Boolean']['output']>;
  username: Maybe<Scalars['String']['output']>;
};

export type SampleUserMinAggregate = {
  age: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['String']['output']>;
  premiumAccount: Maybe<Scalars['Boolean']['output']>;
  username: Maybe<Scalars['String']['output']>;
};

export type SampleUserSumAggregate = {
  age: Maybe<Scalars['Int']['output']>;
};

export type SampleUserUpdateInput = {
  age?: InputMaybe<Scalars['Int']['input']>;
  hobbies?: InputMaybe<Array<Scalars['String']['input']>>;
  premiumAccount?: InputMaybe<Scalars['Boolean']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type SampleUserWhereInput = {
  AND?: InputMaybe<Array<SampleUserWhereInput>>;
  NOT?: InputMaybe<Array<SampleUserWhereInput>>;
  OR?: InputMaybe<Array<SampleUserWhereInput>>;
  age?: InputMaybe<IntFilter>;
  hobbies?: InputMaybe<StringListFilter>;
  id?: InputMaybe<StringFilter>;
  premiumAccount?: InputMaybe<BoolFilter>;
  username?: InputMaybe<StringFilter>;
};

export type SampleUserWhereUniqueInput = {
  AND?: InputMaybe<Array<SampleUserWhereInput>>;
  NOT?: InputMaybe<Array<SampleUserWhereInput>>;
  OR?: InputMaybe<Array<SampleUserWhereInput>>;
  age?: InputMaybe<IntFilter>;
  hobbies?: InputMaybe<StringListFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  premiumAccount?: InputMaybe<BoolFilter>;
  username?: InputMaybe<StringFilter>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<StringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringListFilter = {
  equals?: InputMaybe<Array<Scalars['String']['input']>>;
  has?: InputMaybe<Scalars['String']['input']>;
  hasEvery?: InputMaybe<Array<Scalars['String']['input']>>;
  hasSome?: InputMaybe<Array<Scalars['String']['input']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User = {
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  password: Scalars['String']['output'];
};

export type UserCountAggregate = {
  _all: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  password: Scalars['Int']['output'];
};

export type UserCreateInput = {
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type UserMaxAggregate = {
  email: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['String']['output']>;
  password: Maybe<Scalars['String']['output']>;
};

export type UserMinAggregate = {
  email: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['String']['output']>;
  password: Maybe<Scalars['String']['output']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<StringFilter>;
};

export type GetSampleUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSampleUsersQuery = { sampleUsers: Array<{ id: string, username: string, age: number, hobbies: Array<string> | null, premiumAccount: boolean }> };

export type GetSampleTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSampleTodosQuery = { sampleTodos: Array<{ id: string, content: string, editing: boolean, completed: boolean }> };

export type CreateSampleTodoMutationVariables = Exact<{
  data: SampleTodoCreateInput;
}>;


export type CreateSampleTodoMutation = { createSampleTodo: { id: string, content: string, editing: boolean, completed: boolean } };

export type DeleteSampleTodoMutationVariables = Exact<{
  where: SampleTodoWhereUniqueInput;
}>;


export type DeleteSampleTodoMutation = { deleteSampleTodo: { id: string } };

export type UpdateSampleTodoMutationVariables = Exact<{
  data: SampleTodoUpdateInput;
  where: SampleTodoWhereUniqueInput;
}>;


export type UpdateSampleTodoMutation = { updateSampleTodo: { id: string, content: string, editing: boolean, completed: boolean } };

export type CreateUserMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type CreateUserMutation = { createUser: { id: string, email: string } };

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = { currentUser: { id: string, email: string } };

export type CreateBookmarkMutationVariables = Exact<{
  data: BookmarkCreateInput;
}>;


export type CreateBookmarkMutation = { createBookmark: { id: string, name: string, userId: string } };

export type GetBookmarksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBookmarksQuery = { bookmarks: Array<{ id: string, name: string, userId: string, links: Array<string> | null }> };

export type GetBookmarkQueryVariables = Exact<{
  where: BookmarkWhereUniqueInput;
}>;


export type GetBookmarkQuery = { bookmark: { id: string, name: string, userId: string, links: Array<string> | null } };

export type UpdateBookmarkMutationVariables = Exact<{
  data: BookmarkUpdateInput;
  where: BookmarkWhereUniqueInput;
}>;


export type UpdateBookmarkMutation = { updateBookmark: { id: string, name: string, userId: string, links: Array<string> | null } };

export type DeleteBookmarkMutationVariables = Exact<{
  where: BookmarkWhereUniqueInput;
}>;


export type DeleteBookmarkMutation = { deleteBookmark: { id: string } | null };

export type GetLinksQueryVariables = Exact<{
  urls: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type GetLinksQuery = { links: Array<{ title: string, siteName: string | null, description: string | null, images: Array<string> | null, url: string }> };


export const GetSampleUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSampleUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sampleUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"hobbies"}},{"kind":"Field","name":{"kind":"Name","value":"premiumAccount"}}]}}]}}]} as unknown as DocumentNode<GetSampleUsersQuery, GetSampleUsersQueryVariables>;
export const GetSampleTodosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSampleTodos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sampleTodos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"editing"}},{"kind":"Field","name":{"kind":"Name","value":"completed"}}]}}]}}]} as unknown as DocumentNode<GetSampleTodosQuery, GetSampleTodosQueryVariables>;
export const CreateSampleTodoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createSampleTodo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SampleTodoCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSampleTodo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"editing"}},{"kind":"Field","name":{"kind":"Name","value":"completed"}}]}}]}}]} as unknown as DocumentNode<CreateSampleTodoMutation, CreateSampleTodoMutationVariables>;
export const DeleteSampleTodoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteSampleTodo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SampleTodoWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteSampleTodo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteSampleTodoMutation, DeleteSampleTodoMutationVariables>;
export const UpdateSampleTodoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateSampleTodo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SampleTodoUpdateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SampleTodoWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSampleTodo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"editing"}},{"kind":"Field","name":{"kind":"Name","value":"completed"}}]}}]}}]} as unknown as DocumentNode<UpdateSampleTodoMutation, UpdateSampleTodoMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const GetCurrentUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export const CreateBookmarkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createBookmark"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BookmarkCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBookmark"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<CreateBookmarkMutation, CreateBookmarkMutationVariables>;
export const GetBookmarksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBookmarks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bookmarks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"links"}}]}}]}}]} as unknown as DocumentNode<GetBookmarksQuery, GetBookmarksQueryVariables>;
export const GetBookmarkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBookmark"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BookmarkWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bookmark"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"links"}}]}}]}}]} as unknown as DocumentNode<GetBookmarkQuery, GetBookmarkQueryVariables>;
export const UpdateBookmarkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateBookmark"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BookmarkUpdateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BookmarkWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateBookmark"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"links"}}]}}]}}]} as unknown as DocumentNode<UpdateBookmarkMutation, UpdateBookmarkMutationVariables>;
export const DeleteBookmarkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteBookmark"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BookmarkWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteBookmark"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteBookmarkMutation, DeleteBookmarkMutationVariables>;
export const GetLinksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLinks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"urls"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"links"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"urls"},"value":{"kind":"Variable","name":{"kind":"Name","value":"urls"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"siteName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<GetLinksQuery, GetLinksQueryVariables>;