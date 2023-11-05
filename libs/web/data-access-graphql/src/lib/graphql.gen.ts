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

export type CreateSampleMongooseTableInput = {
  text: Scalars['String']['input'];
  value: Scalars['Float']['input'];
};

export type CreateSampleTodoInput = {
  completed: Scalars['Boolean']['input'];
  editing: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
};

export type CreateSampleUserInput = {
  age: Scalars['Float']['input'];
  hobbies?: InputMaybe<Array<Scalars['String']['input']>>;
  premiumAccount: Scalars['Boolean']['input'];
  username: Scalars['String']['input'];
};

export type DeleteSampleMongooseTableInput = {
  _id: Scalars['String']['input'];
};

export type DeleteSampleTodoInput = {
  _id: Scalars['String']['input'];
};

export type DeleteSampleUserInput = {
  _id: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createSampleMongooseTable: SampleMongooseTable;
  createSampleTodo: SampleTodo;
  createSampleUser: SampleUser;
  deleteSampleMongooseTable: Maybe<SampleMongooseTable>;
  deleteSampleTodo: Maybe<SampleTodo>;
  deleteSampleUser: Maybe<SampleUser>;
  updateSampleMongooseTable: SampleMongooseTable;
  updateSampleTodo: SampleTodo;
  updateSampleUser: SampleUser;
};


export type MutationCreateSampleMongooseTableArgs = {
  createSampleMongooseTableData: CreateSampleMongooseTableInput;
};


export type MutationCreateSampleTodoArgs = {
  createSampleTodoData: CreateSampleTodoInput;
};


export type MutationCreateSampleUserArgs = {
  createSampleUserData: CreateSampleUserInput;
};


export type MutationDeleteSampleMongooseTableArgs = {
  deleteSampleMongooseTableData: DeleteSampleMongooseTableInput;
};


export type MutationDeleteSampleTodoArgs = {
  deleteSampleTodoData: DeleteSampleTodoInput;
};


export type MutationDeleteSampleUserArgs = {
  deleteSampleUserData: DeleteSampleUserInput;
};


export type MutationUpdateSampleMongooseTableArgs = {
  updateSampleMongooseTableData: UpdateSampleMongooseTableInput;
};


export type MutationUpdateSampleTodoArgs = {
  updateSampleTodoData: UpdateSampleTodoInput;
};


export type MutationUpdateSampleUserArgs = {
  updateSampleUserData: UpdateSampleUserInput;
};

export type Query = {
  __typename?: 'Query';
  sampleMongooseTable: SampleMongooseTable;
  sampleMongooseTables: Array<SampleMongooseTable>;
  sampleTodo: SampleTodo;
  sampleTodos: Array<SampleTodo>;
  sampleUser: SampleUser;
  sampleUsers: Array<SampleUser>;
};


export type QuerySampleMongooseTableArgs = {
  _id: Scalars['String']['input'];
};


export type QuerySampleTodoArgs = {
  _id: Scalars['String']['input'];
};


export type QuerySampleUserArgs = {
  _id: Scalars['String']['input'];
};

export type SampleMongooseTable = {
  __typename?: 'SampleMongooseTable';
  _id: Scalars['String']['output'];
  text: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type SampleTodo = {
  __typename?: 'SampleTodo';
  _id: Scalars['String']['output'];
  completed: Scalars['Boolean']['output'];
  editing: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
};

export type SampleUser = {
  __typename?: 'SampleUser';
  _id: Scalars['String']['output'];
  age: Scalars['Float']['output'];
  hobbies: Maybe<Array<Scalars['String']['output']>>;
  premiumAccount: Scalars['Boolean']['output'];
  username: Scalars['String']['output'];
};

export type UpdateSampleMongooseTableInput = {
  _id: Scalars['String']['input'];
  text: Scalars['String']['input'];
  value: Scalars['Float']['input'];
};

export type UpdateSampleTodoInput = {
  _id: Scalars['String']['input'];
  completed: Scalars['Boolean']['input'];
  editing: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
};

export type UpdateSampleUserInput = {
  _id: Scalars['String']['input'];
  age: Scalars['Float']['input'];
  hobbies?: InputMaybe<Array<Scalars['String']['input']>>;
  premiumAccount: Scalars['Boolean']['input'];
  username: Scalars['String']['input'];
};

export type GetSampleUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSampleUsersQuery = { __typename?: 'Query', sampleUsers: Array<{ __typename?: 'SampleUser', _id: string, username: string, age: number, hobbies: Array<string> | null, premiumAccount: boolean }> };

export type GetSampleTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSampleTodosQuery = { __typename?: 'Query', sampleTodos: Array<{ __typename?: 'SampleTodo', _id: string, title: string, editing: boolean, completed: boolean }> };

export type CreateSampleTodoMutationVariables = Exact<{
  createSampleTodoData: CreateSampleTodoInput;
}>;


export type CreateSampleTodoMutation = { __typename?: 'Mutation', createSampleTodo: { __typename?: 'SampleTodo', _id: string, title: string, editing: boolean, completed: boolean } };

export type DeleteSampleTodoMutationVariables = Exact<{
  deleteSampleTodoData: DeleteSampleTodoInput;
}>;


export type DeleteSampleTodoMutation = { __typename?: 'Mutation', deleteSampleTodo: { __typename?: 'SampleTodo', _id: string } | null };

export type UpdateSampleTodoMutationVariables = Exact<{
  updateSampleTodoData: UpdateSampleTodoInput;
}>;


export type UpdateSampleTodoMutation = { __typename?: 'Mutation', updateSampleTodo: { __typename?: 'SampleTodo', _id: string, title: string, editing: boolean, completed: boolean } };

export type GetSampleMongooseTablesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSampleMongooseTablesQuery = { __typename?: 'Query', sampleMongooseTables: Array<{ __typename?: 'SampleMongooseTable', _id: string, text: string, value: number }> };

export type CreateSampleMongooseTableMutationVariables = Exact<{
  createSampleMongooseTableData: CreateSampleMongooseTableInput;
}>;


export type CreateSampleMongooseTableMutation = { __typename?: 'Mutation', createSampleMongooseTable: { __typename?: 'SampleMongooseTable', _id: string, text: string, value: number } };

export type UpdateSampleMongooseTableMutationVariables = Exact<{
  updateSampleMongooseTableData: UpdateSampleMongooseTableInput;
}>;


export type UpdateSampleMongooseTableMutation = { __typename?: 'Mutation', updateSampleMongooseTable: { __typename?: 'SampleMongooseTable', _id: string, text: string, value: number } };

export type DeleteSampleMongooseTableMutationVariables = Exact<{
  deleteSampleMongooseTableData: DeleteSampleMongooseTableInput;
}>;


export type DeleteSampleMongooseTableMutation = { __typename?: 'Mutation', deleteSampleMongooseTable: { __typename?: 'SampleMongooseTable', _id: string } | null };


export const GetSampleUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSampleUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sampleUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"hobbies"}},{"kind":"Field","name":{"kind":"Name","value":"premiumAccount"}}]}}]}}]} as unknown as DocumentNode<GetSampleUsersQuery, GetSampleUsersQueryVariables>;
export const GetSampleTodosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSampleTodos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sampleTodos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"editing"}},{"kind":"Field","name":{"kind":"Name","value":"completed"}}]}}]}}]} as unknown as DocumentNode<GetSampleTodosQuery, GetSampleTodosQueryVariables>;
export const CreateSampleTodoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createSampleTodo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createSampleTodoData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSampleTodoInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSampleTodo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createSampleTodoData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createSampleTodoData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"editing"}},{"kind":"Field","name":{"kind":"Name","value":"completed"}}]}}]}}]} as unknown as DocumentNode<CreateSampleTodoMutation, CreateSampleTodoMutationVariables>;
export const DeleteSampleTodoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteSampleTodo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteSampleTodoData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteSampleTodoInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteSampleTodo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteSampleTodoData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteSampleTodoData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<DeleteSampleTodoMutation, DeleteSampleTodoMutationVariables>;
export const UpdateSampleTodoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateSampleTodo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateSampleTodoData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateSampleTodoInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSampleTodo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateSampleTodoData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateSampleTodoData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"editing"}},{"kind":"Field","name":{"kind":"Name","value":"completed"}}]}}]}}]} as unknown as DocumentNode<UpdateSampleTodoMutation, UpdateSampleTodoMutationVariables>;
export const GetSampleMongooseTablesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSampleMongooseTables"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sampleMongooseTables"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<GetSampleMongooseTablesQuery, GetSampleMongooseTablesQueryVariables>;
export const CreateSampleMongooseTableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createSampleMongooseTable"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createSampleMongooseTableData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSampleMongooseTableInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSampleMongooseTable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createSampleMongooseTableData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createSampleMongooseTableData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<CreateSampleMongooseTableMutation, CreateSampleMongooseTableMutationVariables>;
export const UpdateSampleMongooseTableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateSampleMongooseTable"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateSampleMongooseTableData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateSampleMongooseTableInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSampleMongooseTable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateSampleMongooseTableData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateSampleMongooseTableData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<UpdateSampleMongooseTableMutation, UpdateSampleMongooseTableMutationVariables>;
export const DeleteSampleMongooseTableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteSampleMongooseTable"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteSampleMongooseTableData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteSampleMongooseTableInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteSampleMongooseTable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteSampleMongooseTableData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteSampleMongooseTableData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<DeleteSampleMongooseTableMutation, DeleteSampleMongooseTableMutationVariables>;