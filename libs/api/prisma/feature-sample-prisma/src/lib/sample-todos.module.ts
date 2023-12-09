import { Module } from '@nestjs/common';
import { SampleTodosService } from './sample-todos.service';
import { SampleTodosResolver } from './sample-todos.resolver';

@Module({
  providers: [SampleTodosResolver, SampleTodosService]
})
export class SampleTodosModule {}
