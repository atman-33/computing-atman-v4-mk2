import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SampleTodo } from './models/sample-todo.model';
import { SampleTodoSchema } from './models/sample-todo.schema';
import { SampleTodoRepository } from './sample-mongoose-table.repository';
import { SampleTodoResolver } from './sample-mongoose-table.resolver';
import { SampleTodoService } from './sample-mongoose-table.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: SampleTodo.name,
        schema: SampleTodoSchema
      }
    ])
  ],
  providers: [SampleTodoResolver, SampleTodoService, SampleTodoRepository]
})
export class SampleTodoModule {}
