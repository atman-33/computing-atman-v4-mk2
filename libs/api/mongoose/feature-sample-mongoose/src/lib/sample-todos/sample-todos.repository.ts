import { AbstractRepository } from '@libs/api/mongoose/shared';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SampleTodo } from './models/sample-todo.model';
import { SampleTodoDocument } from './models/sample-todo.schema';

@Injectable()
export class SampleTodosRepository extends AbstractRepository<SampleTodoDocument> {
  protected readonly logger = new Logger(SampleTodosRepository.name);

  constructor(
    @InjectModel(SampleTodo.name)
    SampleTodoModel: Model<SampleTodoDocument>
  ) {
    super(SampleTodoModel);
  }
}
