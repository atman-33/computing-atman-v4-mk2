import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GetSampleTodoArgs } from './dto/args/get-sample-todo-args.dto';
import { CreateSampleTodoInput } from './dto/input/create-sample-todo-input.dto';
import { DeleteSampleTodoInput } from './dto/input/delete-sample-todo-input.dto';
import { UpdateSampleTodoInput } from './dto/input/update-sample-todo-input.dto';
import { SampleTodo } from './models/sample-todo.model';
import { SampleTodosService } from './sample-todos.service';

@Resolver()
export class SampleTodosResolver {
  constructor(private readonly SampleTodoService: SampleTodosService) {}

  @Mutation(() => SampleTodo, { name: 'createSampleTodo' })
  async createSampleTodo(
    @Args('createSampleTodoData')
    createSampleTodoData: CreateSampleTodoInput
  ) {
    return await this.SampleTodoService.createSampleTodo(createSampleTodoData);
  }

  @Mutation(() => SampleTodo, { name: 'updateSampleTodo' })
  async updateSampleTodo(
    @Args('updateSampleTodoData')
    updateSampleTodoData: UpdateSampleTodoInput
  ) {
    return this.SampleTodoService.updateSampleTodo(updateSampleTodoData);
  }

  @Mutation(() => SampleTodo, { name: 'deleteSampleTodo', nullable: true })
  async deleteSampleTodo(
    @Args('deleteSampleTodoData')
    deleteSampleTodoData: DeleteSampleTodoInput
  ) {
    return this.SampleTodoService.deleteSampleTodo(deleteSampleTodoData);
  }

  @Query(() => [SampleTodo], { name: 'sampleTodos' })
  async getSampleTodos() {
    return this.SampleTodoService.getSampleTodos();
  }

  @Query(() => SampleTodo, { name: 'sampleTodo' })
  async getSampleTodo(@Args() getSampleTodoArgs: GetSampleTodoArgs) {
    return this.SampleTodoService.getSampleTodo(getSampleTodoArgs);
  }
}
