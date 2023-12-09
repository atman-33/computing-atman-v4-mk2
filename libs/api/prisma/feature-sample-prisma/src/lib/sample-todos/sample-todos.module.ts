import { PrismaModule } from '@libs/api/prisma/data-access-db';
import { Module } from '@nestjs/common';
import { SampleTodosResolver } from './sample-todos.resolver';
import { SampleTodosService } from './sample-todos.service';

@Module({
  providers: [SampleTodosResolver, SampleTodosService],
  imports: [PrismaModule]
})
export class SampleTodosModule {}
