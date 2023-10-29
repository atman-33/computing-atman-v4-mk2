'use client';

import { gql } from '@/lib/graphql-client';
import { GetSampleMongooseTablesDocument } from '@libs/web/data-access-graphql';

export default async function Page() {
  const data = (
    await gql.query({
      query: GetSampleMongooseTablesDocument
    })
  ).data;

  return <div>{data.sampleMongooseTables.map((x) => x.text)}</div>;
}
