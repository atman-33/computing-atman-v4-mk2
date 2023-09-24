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
  deleteTestMongoose: TestMongoose;
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


export type GetTestMongoosesQuery = { __typename?: 'Query', testMongooses: Array<{ __typename?: 'TestMongoose', _id: string, text: string }> };


export const GetTestMongoosesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTestMongooses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"testMongooses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]} as unknown as DocumentNode<GetTestMongoosesQuery, GetTestMongoosesQueryVariables>;