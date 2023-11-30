import { AuthModule, UsersModule } from '@libs/api/feature-auth';
import { ImageModule } from '@libs/api/feature-image';
import { SampleTodosModule, SampleUsersModule } from '@libs/api/mongoose/feature-sample-mongoose';
import { DatabaseModule } from '@libs/api/mongoose/shared';
import { BookmarksModule } from '@libs/api/sites/booker/feature-bookmarks';
import { LinksModule } from '@libs/api/sites/booker/feature-links';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ServeStaticModule } from '@nestjs/serve-static';
import path, { join } from 'path';
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
      autoSchemaFile: path.join(__dirname, './autogenerated-schema.gql')
    }),
    // ---- RestAPI ---- //
    ImageModule,
    AuthModule,

    // ---- Graphql ---- //
    // When using Mongoose, the DatabaseModule is required.
    DatabaseModule,
    SampleTodosModule,
    SampleUsersModule,
    UsersModule,
    BookmarksModule,
    LinksModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
