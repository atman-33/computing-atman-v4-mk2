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
};

export type Bookmark = {
  _id: Scalars['String']['output'];
  links: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type CreateBookmarkInput = {
  name: Scalars['String']['input'];
};

export type CreateSampleTodoInput = {
  completed: Scalars['Boolean']['input'];
  content: Scalars['String']['input'];
  editing: Scalars['Boolean']['input'];
};

export type CreateSampleUserInput = {
  age: Scalars['Float']['input'];
  hobbies?: InputMaybe<Array<Scalars['String']['input']>>;
  premiumAccount: Scalars['Boolean']['input'];
  username: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type DeleteBookmarkInput = {
  _id: Scalars['String']['input'];
};

export type DeleteSampleTodoInput = {
  _id: Scalars['String']['input'];
};

export type DeleteSampleUserInput = {
  _id: Scalars['String']['input'];
};

export type Link = {
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
  deleteSampleTodo: Maybe<SampleTodo>;
  deleteSampleUser: Maybe<SampleUser>;
  updateBookmark: Bookmark;
  updateSampleTodo: SampleTodo;
  updateSampleUser: SampleUser;
};


export type MutationCreateBookmarkArgs = {
  createBookmarkData: CreateBookmarkInput;
};


export type MutationCreateSampleTodoArgs = {
  createSampleTodoData: CreateSampleTodoInput;
};


export type MutationCreateSampleUserArgs = {
  createSampleUserData: CreateSampleUserInput;
};


export type MutationCreateUserArgs = {
  createUserData: CreateUserInput;
};


export type MutationDeleteBookmarkArgs = {
  deleteBookmarkData: DeleteBookmarkInput;
};


export type MutationDeleteSampleTodoArgs = {
  deleteSampleTodoData: DeleteSampleTodoInput;
};


export type MutationDeleteSampleUserArgs = {
  deleteSampleUserData: DeleteSampleUserInput;
};


export type MutationUpdateBookmarkArgs = {
  updateBookmarkData: UpdateBookmarkInput;
};


export type MutationUpdateSampleTodoArgs = {
  updateSampleTodoData: UpdateSampleTodoInput;
};


export type MutationUpdateSampleUserArgs = {
  updateSampleUserData: UpdateSampleUserInput;
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
  _id: Scalars['String']['input'];
};


export type QueryLinksArgs = {
  urls: Array<Scalars['String']['input']>;
};


export type QuerySampleTodoArgs = {
  _id: Scalars['String']['input'];
};


export type QuerySampleUserArgs = {
  _id: Scalars['String']['input'];
};


export type QueryUserArgs = {
  _id: Scalars['String']['input'];
};

export type SampleTodo = {
  _id: Scalars['String']['output'];
  completed: Scalars['Boolean']['output'];
  content: Scalars['String']['output'];
  editing: Scalars['Boolean']['output'];
};

export type SampleUser = {
  _id: Scalars['String']['output'];
  age: Scalars['Float']['output'];
  hobbies: Maybe<Array<Scalars['String']['output']>>;
  premiumAccount: Scalars['Boolean']['output'];
  username: Scalars['String']['output'];
};

export type UpdateBookmarkInput = {
  _id: Scalars['String']['input'];
  links: Array<Scalars['String']['input']>;
};

export type UpdateSampleTodoInput = {
  _id: Scalars['String']['input'];
  completed: Scalars['Boolean']['input'];
  content: Scalars['String']['input'];
  editing: Scalars['Boolean']['input'];
};

export type UpdateSampleUserInput = {
  _id: Scalars['String']['input'];
  age: Scalars['Float']['input'];
  hobbies?: InputMaybe<Array<Scalars['String']['input']>>;
  premiumAccount: Scalars['Boolean']['input'];
  username: Scalars['String']['input'];
};

export type User = {
  _id: Scalars['String']['output'];
  email: Scalars['String']['output'];
};

export type GetSampleUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSampleUsersQuery = { sampleUsers: Array<{ _id: string, username: string, age: number, hobbies: Array<string> | null, premiumAccount: boolean }> };

export type GetSampleTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSampleTodosQuery = { sampleTodos: Array<{ _id: string, content: string, editing: boolean, completed: boolean }> };

export type CreateSampleTodoMutationVariables = Exact<{
  createSampleTodoData: CreateSampleTodoInput;
}>;


export type CreateSampleTodoMutation = { createSampleTodo: { _id: string, content: string, editing: boolean, completed: boolean } };

export type DeleteSampleTodoMutationVariables = Exact<{
  deleteSampleTodoData: DeleteSampleTodoInput;
}>;


export type DeleteSampleTodoMutation = { deleteSampleTodo: { _id: string } | null };

export type UpdateSampleTodoMutationVariables = Exact<{
  updateSampleTodoData: UpdateSampleTodoInput;
}>;


export type UpdateSampleTodoMutation = { updateSampleTodo: { _id: string, content: string, editing: boolean, completed: boolean } };

export type CreateUserMutationVariables = Exact<{
  createUserData: CreateUserInput;
}>;


export type CreateUserMutation = { createUser: { _id: string, email: string } };

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = { currentUser: { _id: string, email: string } };

export type CreateBookmarkMutationVariables = Exact<{
  createBookmarkData: CreateBookmarkInput;
}>;


export type CreateBookmarkMutation = { createBookmark: { _id: string, name: string, userId: string } };

export type GetBookmarksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBookmarksQuery = { bookmarks: Array<{ _id: string, name: string, userId: string, links: Array<string> }> };

export type GetBookmarkQueryVariables = Exact<{
  _id: Scalars['String']['input'];
}>;


export type GetBookmarkQuery = { bookmark: { _id: string, name: string, userId: string, links: Array<string> } };

export type UpdateBookmarkMutationVariables = Exact<{
  updateBookmarkData: UpdateBookmarkInput;
}>;


export type UpdateBookmarkMutation = { updateBookmark: { _id: string, name: string, userId: string, links: Array<string> } };

export type DeleteBookmarkMutationVariables = Exact<{
  deleteBookmarkData: DeleteBookmarkInput;
}>;


export type DeleteBookmarkMutation = { deleteBookmark: { _id: string } | null };

export type LinksQueryVariables = Exact<{
  urls: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type LinksQuery = { links: Array<{ siteName: string | null, title: string, images: Array<string> | null, url: string }> };


export const GetSampleUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSampleUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sampleUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"hobbies"}},{"kind":"Field","name":{"kind":"Name","value":"premiumAccount"}}]}}]}}]} as unknown as DocumentNode<GetSampleUsersQuery, GetSampleUsersQueryVariables>;
export const GetSampleTodosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSampleTodos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sampleTodos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"editing"}},{"kind":"Field","name":{"kind":"Name","value":"completed"}}]}}]}}]} as unknown as DocumentNode<GetSampleTodosQuery, GetSampleTodosQueryVariables>;
export const CreateSampleTodoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createSampleTodo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createSampleTodoData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSampleTodoInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSampleTodo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createSampleTodoData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createSampleTodoData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"editing"}},{"kind":"Field","name":{"kind":"Name","value":"completed"}}]}}]}}]} as unknown as DocumentNode<CreateSampleTodoMutation, CreateSampleTodoMutationVariables>;
export const DeleteSampleTodoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteSampleTodo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteSampleTodoData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteSampleTodoInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteSampleTodo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteSampleTodoData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteSampleTodoData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<DeleteSampleTodoMutation, DeleteSampleTodoMutationVariables>;
export const UpdateSampleTodoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateSampleTodo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateSampleTodoData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateSampleTodoInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSampleTodo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateSampleTodoData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateSampleTodoData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"editing"}},{"kind":"Field","name":{"kind":"Name","value":"completed"}}]}}]}}]} as unknown as DocumentNode<UpdateSampleTodoMutation, UpdateSampleTodoMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createUserData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createUserData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createUserData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const GetCurrentUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export const CreateBookmarkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createBookmark"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createBookmarkData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateBookmarkInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBookmark"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createBookmarkData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createBookmarkData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<CreateBookmarkMutation, CreateBookmarkMutationVariables>;
export const GetBookmarksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBookmarks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bookmarks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"links"}}]}}]}}]} as unknown as DocumentNode<GetBookmarksQuery, GetBookmarksQueryVariables>;
export const GetBookmarkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBookmark"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bookmark"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"links"}}]}}]}}]} as unknown as DocumentNode<GetBookmarkQuery, GetBookmarkQueryVariables>;
export const UpdateBookmarkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateBookmark"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateBookmarkData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateBookmarkInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateBookmark"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateBookmarkData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateBookmarkData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"links"}}]}}]}}]} as unknown as DocumentNode<UpdateBookmarkMutation, UpdateBookmarkMutationVariables>;
export const DeleteBookmarkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteBookmark"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteBookmarkData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteBookmarkInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteBookmark"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteBookmarkData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteBookmarkData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<DeleteBookmarkMutation, DeleteBookmarkMutationVariables>;
export const LinksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"links"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"urls"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"links"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"urls"},"value":{"kind":"Variable","name":{"kind":"Name","value":"urls"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"siteName"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<LinksQuery, LinksQueryVariables>;