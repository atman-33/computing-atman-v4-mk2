## create environment.ts

 `apps/api/src/environments/environment.ts`

ex.  

```ts
export const apiEnv: IApiEnv = {
  isProd: process.env.ATMAN_ENV === 'production',
  api: {
    port: Number(process.env.ATMAN_API_PORT)
  },
  db: {
    url: process.env.ATMAN_DB_URL
  }
};

export interface IApiEnv {
  isProd: boolean;
  api: {
    port: number;
  };
  db: {
    url: string;
  };
}
```

## add apiEnv

add isProd, api form apiEnv  

 `apps/api/tsconfig.json`

```ts
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import helmet from '@fastify/helmet';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app/app.module';
import { apiEnv } from './environments/environment';

const { isProd, api } = apiEnv;

const runHost = isProd ? '0.0.0.0' : 'localhost';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

  await app.register(helmet, { contentSecurityPolicy: isProd });
  app.enableCors();

  await app.listen(api.port, runHost);
  Logger.log(`🚀 Application playground is running on: http://localhost:${api.port}/graphiql`);
}

// eslint-disable-next-line unicorn/prefer-top-level-await
bootstrap();
```
