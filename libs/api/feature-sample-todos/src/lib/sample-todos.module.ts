import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SampleTodo } from './models/sample-todo.model';
import { SampleTodoSchema } from './models/sample-todo.schema';
import { SampleTodosRepository } from './sample-todos.repository';
import { SampleTodosResolver } from './sample-todos.resolver';
import { SampleTodosService } from './sample-todos.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: SampleTodo.name,
        schema: SampleTodoSchema
      }
    ])
  ],
  providers: [SampleTodosResolver, SampleTodosService, SampleTodosRepository]
})
export class SampleTodosModule {}
