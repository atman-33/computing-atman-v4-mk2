import { PrismaModule } from '@libs/api/prisma/data-access-db';
import { Module } from '@nestjs/common';
import { SampleUsersResolver } from './sample-users.resolver';
import { SampleUsersService } from './sample-users.service';

@Module({
  providers: [SampleUsersResolver, SampleUsersService],
  imports: [PrismaModule]
})
export class SampleUsersModule {}
