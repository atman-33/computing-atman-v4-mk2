## Create graphql-client.ts

 `libs/web/data-access-graphql/src/lib/graphql-client.ts`

## Create client for web

 `apps/web/data-access/graphql-client.ts`

## Use graphql-client

ex.  

```tsx
import { gql } from '@/data-access/graphql-client';
import { GetSampleMongooseTablesDocument } from '@libs/web/data-access-graphql';

export default async function page() {
  const data = (
    await gql.query({
      query: GetSampleMongooseTablesDocument
    })
  ).data;

  console.log(data);

  return <div>{data.SampleMongooseTables.map((x) => x.text)}</div>;
}
```
