import { Injectable } from '@nestjs/common';
import { CreateSampleTodoInput } from './dto/create-sample-todo.input';
import { UpdateSampleTodoInput } from './dto/update-sample-todo.input';

@Injectable()
export class SampleTodosService {
  create(createSampleTodoInput: CreateSampleTodoInput) {
    return 'This action adds a new sampleTodo';
  }

  findAll() {
    return `This action returns all sampleTodos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sampleTodo`;
  }

  update(id: number, updateSampleTodoInput: UpdateSampleTodoInput) {
    return `This action updates a #${id} sampleTodo`;
  }

  remove(id: number) {
    return `This action removes a #${id} sampleTodo`;
  }
}
