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

export type CreateTestMongooseInput = {
  text: Scalars['String']['input'];
  value: Scalars['Float']['input'];
};

export type DeleteTestMongooseInput = {
  _id: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTestMongoose: TestMongoose;
  deleteTestMongoose: Maybe<TestMongoose>;
  updateTestMongoose: TestMongoose;
};


export type MutationCreateTestMongooseArgs = {
  createTestMongooseData: CreateTestMongooseInput;
};


export type MutationDeleteTestMongooseArgs = {
  deleteTestMongooseArgs: DeleteTestMongooseInput;
};


export type MutationUpdateTestMongooseArgs = {
  updateTestMongooseData: UpdateTestMongooseInput;
};

export type Query = {
  __typename?: 'Query';
  testMongoose: TestMongoose;
  testMongooses: Array<TestMongoose>;
};


export type QueryTestMongooseArgs = {
  _id: Scalars['String']['input'];
};

export type TestMongoose = {
  __typename?: 'TestMongoose';
  _id: Scalars['String']['output'];
  text: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type UpdateTestMongooseInput = {
  _id: Scalars['String']['input'];
  text: Scalars['String']['input'];
  value: Scalars['Float']['input'];
};

export type GetTestMongoosesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTestMongoosesQuery = { __typename?: 'Query', testMongooses: Array<{ __typename?: 'TestMongoose', _id: string, text: string, value: number }> };

export type CreateTestMongooseMutationVariables = Exact<{
  createTestMongooseData: CreateTestMongooseInput;
}>;


export type CreateTestMongooseMutation = { __typename?: 'Mutation', createTestMongoose: { __typename?: 'TestMongoose', _id: string, text: string, value: number } };

export type UpdateTestMongooseMutationVariables = Exact<{
  updateTestMongooseData: UpdateTestMongooseInput;
}>;


export type UpdateTestMongooseMutation = { __typename?: 'Mutation', updateTestMongoose: { __typename?: 'TestMongoose', _id: string, text: string, value: number } };

export type DeleteTestMongooseMutationVariables = Exact<{
  deleteTestMongooseArgs: DeleteTestMongooseInput;
}>;


export type DeleteTestMongooseMutation = { __typename?: 'Mutation', deleteTestMongoose: { __typename?: 'TestMongoose', _id: string } | null };


export const GetTestMongoosesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTestMongooses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"testMongooses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<GetTestMongoosesQuery, GetTestMongoosesQueryVariables>;
export const CreateTestMongooseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createTestMongoose"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createTestMongooseData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTestMongooseInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTestMongoose"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createTestMongooseData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createTestMongooseData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<CreateTestMongooseMutation, CreateTestMongooseMutationVariables>;
export const UpdateTestMongooseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateTestMongoose"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateTestMongooseData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTestMongooseInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTestMongoose"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateTestMongooseData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateTestMongooseData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<UpdateTestMongooseMutation, UpdateTestMongooseMutationVariables>;
export const DeleteTestMongooseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteTestMongoose"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteTestMongooseArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteTestMongooseInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTestMongoose"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteTestMongooseArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteTestMongooseArgs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<DeleteTestMongooseMutation, DeleteTestMongooseMutationVariables>;