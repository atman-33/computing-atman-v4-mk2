import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CreateSampleTodoInput } from './dto/create-sample-todo-input.dto';
import { DeleteSampleTodoInput } from './dto/delete-sample-todo-input.dto';
import { GetSampleTodoArgs } from './dto/get-sample-todo-args.dto';
import { UpdateSampleTodoInput } from './dto/update-sample-todo-input.dto';
import { SampleTodo } from './models/sample-todo.model';
import { SampleTodosService } from './sample-todos.service';

@Resolver(() => SampleTodo)
export class SampleTodosResolver {
  constructor(private readonly sampleTodosService: SampleTodosService) {}

  @Query(() => [SampleTodo], { name: 'sampleTodos' })
  async getSampleTodos() {
    return await this.sampleTodosService.getSampleTodos();
  }

  @Query(() => SampleTodo, { name: 'sampleTodo' })
  async getSampleTodo(@Args() getSampleTodoArgs: GetSampleTodoArgs) {
    return await this.sampleTodosService.getSampleTodo(getSampleTodoArgs);
  }

  @Mutation(() => SampleTodo)
  async createSampleTodo(@Args() createSampleTodoData: CreateSampleTodoInput) {
    return await this.sampleTodosService.createSampleTodo(createSampleTodoData);
  }

  @Mutation(() => SampleTodo)
  async updateSampleTodo(@Args() updateSampleTodoData: UpdateSampleTodoInput) {
    return await this.sampleTodosService.updateSampleTodo(updateSampleTodoData);
  }

  @Mutation(() => SampleTodo, { name: 'deleteSampleTodo' })
  async deleteSampleTodo(@Args() deleteSampleTodoData: DeleteSampleTodoInput) {
    return await this.sampleTodosService.deleteSampleTodo(deleteSampleTodoData);
  }
}
