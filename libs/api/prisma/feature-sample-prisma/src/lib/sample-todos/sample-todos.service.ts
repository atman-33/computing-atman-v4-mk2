import { PrismaService } from '@libs/api/prisma/data-access-db';
import { Injectable } from '@nestjs/common';
import { CreateSampleTodoInput } from './dto/create-sample-todo-input.dto';
import { DeleteSampleTodoInput } from './dto/delete-sample-todo-input.dto';
import { GetSampleTodoArgs } from './dto/get-sample-todo-args.dto';
import { UpdateSampleTodoInput } from './dto/update-sample-todo-input.dto';

@Injectable()
export class SampleTodosService {
  constructor(private readonly prisma: PrismaService) {}

  async getSampleTodos() {
    return await this.prisma.sampleTodo.findMany();
  }

  async getSampleTodo(getSampleTodoArgs: GetSampleTodoArgs) {
    return await this.prisma.sampleTodo.findUnique({ where: getSampleTodoArgs.where });
  }

  async createSampleTodo(createSampleTodoData: CreateSampleTodoInput) {
    return await this.prisma.sampleTodo.create({ data: createSampleTodoData.data });
  }

  async updateSampleTodo(updateSampleTodoData: UpdateSampleTodoInput) {
    return await this.prisma.sampleTodo.update({
      where: updateSampleTodoData.where,
      data: updateSampleTodoData.data
    });
  }

  async deleteSampleTodo(deleteSampleTodoData: DeleteSampleTodoInput) {
    return await this.prisma.sampleTodo.delete({
      where: deleteSampleTodoData.where
    });
  }
}
