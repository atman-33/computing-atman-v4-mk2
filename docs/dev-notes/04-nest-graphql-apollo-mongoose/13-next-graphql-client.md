## Create graphql-client.ts

 `libs/web/data-access-graphql/src/lib/graphql-client.ts`

## Create client for web

 `apps/web/data-access/graphql-client.ts`

## Use graphql-client

ex.  

```tsx
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
```
