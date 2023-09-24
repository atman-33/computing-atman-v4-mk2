## Install pacakages

graphql etc:  

```bash
npm i @nestjs/graphql @nestjs/apollo graphql apollo-server-express
```

class validator etc  

```bash
npm i class-validator class-transformer
```

bcrypt  

```bash
npm i bcrypt
```

passport etc  

```bash
npm install --save @nestjs/passport passport passport-local
npm install --save-dev @types/passport-local
npm install --save @nestjs/jwt passport-jwt
npm install --save-dev @types/passport-jwt
```

cookie-parser  

```bash
npm install cookie-parser
npm install --save-dev @types/cookie-parser
```

## Update main.ts

 `apps/api/src/main.ts`

```ts
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());

  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(`🚀 Application playground is running on: http://localhost:${port}/api/graphql`);
}

bootstrap();
```

## Update app.module.ts

 `apps/api/src/app/app.module.ts`

```ts
import { SampleModule } from '@libs/api/feature-sample';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      path: '/api/graphql',
      autoSchemaFile: true
    }),
    SampleModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
```

> If any module that has resolver not exists, error happens!
