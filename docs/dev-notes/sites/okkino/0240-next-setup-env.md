## create environment.ts

`apps/web/environments/environment.ts`

```ts
export const webEnv: IWebEnv = {
  isProd: process.env.ATMAN_ENV === 'production',
  api: {
    gqlUrl: process.env.ATMAN_WEB_GQL_URL as string
  }
};

export interface IWebEnv {
  isProd: boolean;
  api: {
    gqlUrl: string;
  };
}
```

## add webEnv

`apps/web/data-access/graphql-client.ts`

```ts
import { getGraphqlClient } from '@libs/web/data-access-graphql';
import { webEnv } from '../environments/environment';

const { api } = webEnv;

export const gql = getGraphqlClient(api.gqlUrl);
```
