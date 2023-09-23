import { ImageModule } from '@libs/api/feature-image';
import { TestMongooseModule } from '@libs/api/feature-test-mongoose';
import { DatabaseModule } from '@libs/api/mongoose/shared';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'web/.next'),
      exclude: ['/api/*', '/api/graphql']
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      path: '/api/graphql',
      autoSchemaFile: true
    }),
    // ---- RestAPI ---- //
    ImageModule,

    // ---- Graphql ---- //
    // When using Mongoose, the DatabaseModule is required.
    DatabaseModule,
    TestMongooseModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
