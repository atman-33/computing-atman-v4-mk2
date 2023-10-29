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

export type DeleteSampleMongooseTableInput = {
  _id: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createSampleMongooseTable: SampleMongooseTable;
  deleteSampleMongooseTable: Maybe<SampleMongooseTable>;
  updateSampleMongooseTable: SampleMongooseTable;
};


export type MutationCreateSampleMongooseTableArgs = {
  createSampleMongooseTableData: CreateSampleMongooseTableInput;
};


export type MutationDeleteSampleMongooseTableArgs = {
  deleteSampleMongooseTableArgs: DeleteSampleMongooseTableInput;
};


export type MutationUpdateSampleMongooseTableArgs = {
  updateSampleMongooseTableData: UpdateSampleMongooseTableInput;
};

export type Query = {
  __typename?: 'Query';
  sampleMongooseTable: SampleMongooseTable;
  sampleMongooseTables: Array<SampleMongooseTable>;
};


export type QuerySampleMongooseTableArgs = {
  _id: Scalars['String']['input'];
};

export type SampleMongooseTable = {
  __typename?: 'SampleMongooseTable';
  _id: Scalars['String']['output'];
  text: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type UpdateSampleMongooseTableInput = {
  _id: Scalars['String']['input'];
  text: Scalars['String']['input'];
  value: Scalars['Float']['input'];
};

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
  deleteSampleMongooseTableArgs: DeleteSampleMongooseTableInput;
}>;


export type DeleteSampleMongooseTableMutation = { __typename?: 'Mutation', deleteSampleMongooseTable: { __typename?: 'SampleMongooseTable', _id: string } | null };


export const GetSampleMongooseTablesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSampleMongooseTables"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sampleMongooseTables"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<GetSampleMongooseTablesQuery, GetSampleMongooseTablesQueryVariables>;
export const CreateSampleMongooseTableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createSampleMongooseTable"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createSampleMongooseTableData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSampleMongooseTableInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSampleMongooseTable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createSampleMongooseTableData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createSampleMongooseTableData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<CreateSampleMongooseTableMutation, CreateSampleMongooseTableMutationVariables>;
export const UpdateSampleMongooseTableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateSampleMongooseTable"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateSampleMongooseTableData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateSampleMongooseTableInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSampleMongooseTable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateSampleMongooseTableData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateSampleMongooseTableData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<UpdateSampleMongooseTableMutation, UpdateSampleMongooseTableMutationVariables>;
export const DeleteSampleMongooseTableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteSampleMongooseTable"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteSampleMongooseTableArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteSampleMongooseTableInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteSampleMongooseTable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteSampleMongooseTableArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteSampleMongooseTableArgs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<DeleteSampleMongooseTableMutation, DeleteSampleMongooseTableMutationVariables>;