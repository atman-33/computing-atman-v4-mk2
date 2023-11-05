import { Injectable } from '@nestjs/common';
import { GetSampleTodoArgs } from './dto/args/get-sample-todo-args.dto';
import { CreateSampleTodoInput } from './dto/input/create-sample-todo-input.dto';
import { DeleteSampleTodoInput } from './dto/input/delete-sample-todo-input.dto';
import { UpdateSampleTodoInput } from './dto/input/update-sample-todo-input.dto';
import { SampleTodoDocument } from './models/sample-todo.schema';
import { SampleTodosRepository } from './sample-todos.repository';

@Injectable()
export class SampleTodosService {
  constructor(private readonly SampleTodoRepository: SampleTodosRepository) {}

  async createSampleTodo(createSampleTodoData: CreateSampleTodoInput) {
    const SampleTodoDocument = await this.SampleTodoRepository.create({
      ...createSampleTodoData
    });

    return this.toModel(SampleTodoDocument);
  }

  async updateSampleTodo(updateSampleTodoData: UpdateSampleTodoInput) {
    const SampleTodoDocument = await this.SampleTodoRepository.findOneAndUpdate(
      { _id: updateSampleTodoData._id },
      updateSampleTodoData
    );
    return this.toModel(SampleTodoDocument);
  }

  async deleteSampleTodo(deleteSampleTodoData: DeleteSampleTodoInput) {
    return await this.SampleTodoRepository.deleteOne({
      _id: deleteSampleTodoData._id
    });
  }

  async getSampleTodos() {
    const SampleTodoDocument = await this.SampleTodoRepository.find({});
    return SampleTodoDocument.map((todo) => this.toModel(todo));
  }

  async getSampleTodo(getSampleTodoArgs: GetSampleTodoArgs) {
    const SampleTodoDocument = await this.SampleTodoRepository.findOne({
      ...getSampleTodoArgs
    });
    return this.toModel(SampleTodoDocument);
  }

  private toModel(SampleTodoDocument: SampleTodoDocument) {
    return {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      _id: SampleTodoDocument._id.toHexString(),
      ...SampleTodoDocument
    };
  }
}
