import { PrismaModule } from '@libs/api/prisma/data-access-db';
import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  providers: [UsersResolver, UsersService],
  imports: [PrismaModule]
})
export class UsersModule {}
