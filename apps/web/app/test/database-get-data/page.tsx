'use client';

import { gql } from '@/lib/graphql-client';
import { GetTestMongoosesDocument } from '@libs/web/data-access-graphql';

export default async function Page() {
  const data = (
    await gql.query({
      query: GetTestMongoosesDocument
    })
  ).data;

  return <div>{data.testMongooses.map((x) => x.text)}</div>;
}
