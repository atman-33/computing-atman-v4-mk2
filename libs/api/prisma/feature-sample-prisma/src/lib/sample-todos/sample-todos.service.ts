import { PrismaService } from '@libs/api/prisma/data-access-db';
import { Injectable } from '@nestjs/common';
import {
  CreateOneSampleTodoArgs,
  DeleteOneSampleTodoArgs,
  FindUniqueSampleTodoArgs,
  UpdateOneSampleTodoArgs
} from './dto/sample-todo.dto';
import { SampleTodo } from './models/sample-todo.model';

@Injectable()
export class SampleTodosService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Create a new sample todo.
   *
   * @param {CreateOneSampleTodoArgs} createOneSampleTodoArgs - The arguments to create a new sample todo.
   * @return {Promise<SampleTodo>} The newly created sample todo.
   */
  create(createOneSampleTodoArgs: CreateOneSampleTodoArgs): Promise<SampleTodo> {
    return this.prisma.sampleTodo.create({
      data: createOneSampleTodoArgs.data
    });
  }

  /**
   * Retrieves all the sample todo items.
   *
   * @return {Promise<SampleTodo[]>} A promise that resolves with an array of sample todo items.
   */
  findAll(): Promise<SampleTodo[]> {
    return this.prisma.sampleTodo.findMany();
  }

  /**
   * Retrieves a unique sample todo based on the provided arguments.
   *
   * @param {FindUniqueSampleTodoArgs} findUniqueSampleTodoArgs - The arguments used to find the unique sample todo.
   * @return {Promise<SampleTodo | null>} A promise that resolves to the unique sample todo, or null if not found.
   */
  findOne(findUniqueSampleTodoArgs: FindUniqueSampleTodoArgs): Promise<SampleTodo | null> {
    return this.prisma.sampleTodo.findUnique({
      where: findUniqueSampleTodoArgs.where
    });
  }

  /**
   * Updates a sample todo based on the provided arguments.
   *
   * @param {UpdateOneSampleTodoArgs} updateOneSampleTodoArgs - The arguments for updating a sample todo.
   * @return {Promise<SampleTodo>} - A promise that resolves to the updated sample todo.
   */
  update(updateOneSampleTodoArgs: UpdateOneSampleTodoArgs): Promise<SampleTodo> {
    return this.prisma.sampleTodo.update({
      where: updateOneSampleTodoArgs.where,
      data: updateOneSampleTodoArgs.data
    });
  }

  /**
   * Removes a sample todo item from the database.
   *
   * @param {DeleteOneSampleTodoArgs} deleteOneSampleTodoArgs - The arguments for deleting a sample todo item.
   * @return {Promise<SampleTodo>} A promise that resolves to the deleted sample todo item.
   */
  remove(deleteOneSampleTodoArgs: DeleteOneSampleTodoArgs): Promise<SampleTodo> {
    return this.prisma.sampleTodo.delete({
      where: deleteOneSampleTodoArgs.where
    });
  }
}
