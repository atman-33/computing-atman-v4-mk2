'use client';

import { gql } from '@/data-access/graphql-client';
import { GetTestMongoosesDocument } from '@libs/web/data-access-graphql';

export default async function page() {
  const data = (
    await gql.query({
      query: GetTestMongoosesDocument
    })
  ).data;

  console.log(data);

  return <div>{data.testMongooses.map((x) => x.text)}</div>;
}