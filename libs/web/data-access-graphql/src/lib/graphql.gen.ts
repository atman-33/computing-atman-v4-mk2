import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
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

export type DeleteSampleTodoInput = {
  _id: Scalars['String']['input'];
};

export type DeleteSampleUserInput = {
  _id: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createSampleTodo: SampleTodo;
  createSampleUser: SampleUser;
  createUser: User;
  deleteSampleTodo: Maybe<SampleTodo>;
  deleteSampleUser: Maybe<SampleUser>;
  updateSampleTodo: SampleTodo;
  updateSampleUser: SampleUser;
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


export type MutationDeleteSampleTodoArgs = {
  deleteSampleTodoData: DeleteSampleTodoInput;
};


export type MutationDeleteSampleUserArgs = {
  deleteSampleUserData: DeleteSampleUserInput;
};


export type MutationUpdateSampleTodoArgs = {
  updateSampleTodoData: UpdateSampleTodoInput;
};


export type MutationUpdateSampleUserArgs = {
  updateSampleUserData: UpdateSampleUserInput;
};

export type Query = {
  __typename?: 'Query';
  currentUser: User;
  sampleTodo: SampleTodo;
  sampleTodos: Array<SampleTodo>;
  sampleUser: SampleUser;
  sampleUsers: Array<SampleUser>;
  user: User;
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
  __typename?: 'SampleTodo';
  _id: Scalars['String']['output'];
  completed: Scalars['Boolean']['output'];
  content: Scalars['String']['output'];
  editing: Scalars['Boolean']['output'];
};

export type SampleUser = {
  __typename?: 'SampleUser';
  _id: Scalars['String']['output'];
  age: Scalars['Float']['output'];
  hobbies: Maybe<Array<Scalars['String']['output']>>;
  premiumAccount: Scalars['Boolean']['output'];
  username: Scalars['String']['output'];
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
  __typename?: 'User';
  _id: Scalars['String']['output'];
  email: Scalars['String']['output'];
};

export type GetSampleUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSampleUsersQuery = { __typename?: 'Query', sampleUsers: Array<{ __typename?: 'SampleUser', _id: string, username: string, age: number, hobbies: Array<string> | null, premiumAccount: boolean }> };

export type GetSampleTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSampleTodosQuery = { __typename?: 'Query', sampleTodos: Array<{ __typename?: 'SampleTodo', _id: string, content: string, editing: boolean, completed: boolean }> };

export type CreateSampleTodoMutationVariables = Exact<{
  createSampleTodoData: CreateSampleTodoInput;
}>;


export type CreateSampleTodoMutation = { __typename?: 'Mutation', createSampleTodo: { __typename?: 'SampleTodo', _id: string, content: string, editing: boolean, completed: boolean } };

export type DeleteSampleTodoMutationVariables = Exact<{
  deleteSampleTodoData: DeleteSampleTodoInput;
}>;


export type DeleteSampleTodoMutation = { __typename?: 'Mutation', deleteSampleTodo: { __typename?: 'SampleTodo', _id: string } | null };

export type UpdateSampleTodoMutationVariables = Exact<{
  updateSampleTodoData: UpdateSampleTodoInput;
}>;


export type UpdateSampleTodoMutation = { __typename?: 'Mutation', updateSampleTodo: { __typename?: 'SampleTodo', _id: string, content: string, editing: boolean, completed: boolean } };


export const GetSampleUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSampleUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sampleUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"hobbies"}},{"kind":"Field","name":{"kind":"Name","value":"premiumAccount"}}]}}]}}]} as unknown as DocumentNode<GetSampleUsersQuery, GetSampleUsersQueryVariables>;
export const GetSampleTodosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSampleTodos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sampleTodos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"editing"}},{"kind":"Field","name":{"kind":"Name","value":"completed"}}]}}]}}]} as unknown as DocumentNode<GetSampleTodosQuery, GetSampleTodosQueryVariables>;
export const CreateSampleTodoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createSampleTodo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createSampleTodoData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSampleTodoInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSampleTodo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createSampleTodoData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createSampleTodoData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"editing"}},{"kind":"Field","name":{"kind":"Name","value":"completed"}}]}}]}}]} as unknown as DocumentNode<CreateSampleTodoMutation, CreateSampleTodoMutationVariables>;
export const DeleteSampleTodoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteSampleTodo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteSampleTodoData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteSampleTodoInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteSampleTodo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteSampleTodoData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteSampleTodoData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<DeleteSampleTodoMutation, DeleteSampleTodoMutationVariables>;
export const UpdateSampleTodoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateSampleTodo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateSampleTodoData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateSampleTodoInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSampleTodo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateSampleTodoData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateSampleTodoData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"editing"}},{"kind":"Field","name":{"kind":"Name","value":"completed"}}]}}]}}]} as unknown as DocumentNode<UpdateSampleTodoMutation, UpdateSampleTodoMutationVariables>;