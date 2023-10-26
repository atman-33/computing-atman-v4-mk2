'use client';

import { GetTestMongoosesDocument } from '@libs/web/data-access-graphql';
import { gql } from 'apps/web/lib/graphql-client';

export default async function Page() {
  const data = (
    await gql.query({
      query: GetTestMongoosesDocument
    })
  ).data;

  return <div>{data.testMongooses.map((x) => x.text)}</div>;
}
