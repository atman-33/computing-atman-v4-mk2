import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SampleUserSchema } from './models/sample-todo.schema';
import { SampleUser } from './models/sample-user.model';
import { SampleUsersRepository } from './sample-users.repository';
import { SampleUsersResolver } from './sample-users.resolver';
import { SampleUsersService } from './sample-users.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: SampleUser.name,
        schema: SampleUserSchema
      }
    ])
  ],
  providers: [SampleUsersResolver, SampleUsersService, SampleUsersRepository]
})
export class SampleUsersModule {}
