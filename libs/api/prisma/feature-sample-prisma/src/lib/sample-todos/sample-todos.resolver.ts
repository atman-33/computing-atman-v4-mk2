import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SampleTodosService } from '../sample-todos/sample-todos.service';
import {
  CreateOneSampleTodoArgs,
  DeleteOneSampleTodoArgs,
  FindUniqueSampleTodoArgs,
  UpdateOneSampleTodoArgs
} from './dto/sample-todo.dto';
import { SampleTodo } from './models/sample-todo.model';

@Resolver(() => SampleTodo)
export class SampleTodosResolver {
  constructor(private readonly sampleTodosService: SampleTodosService) {}

  @Mutation(() => SampleTodo)
  async createSampleTodo(@Args() createOneSampleTodoArgs: CreateOneSampleTodoArgs) {
    return await this.sampleTodosService.create(createOneSampleTodoArgs);
  }

  @Query(() => [SampleTodo], { name: 'sampleTodos' })
  async findAll() {
    return await this.sampleTodosService.findAll();
  }

  @Query(() => SampleTodo, { name: 'sampleTodo' })
  async findOne(@Args() findUniqueSampleTodoArgs: FindUniqueSampleTodoArgs) {
    return await this.sampleTodosService.findOne(findUniqueSampleTodoArgs);
  }

  @Mutation(() => SampleTodo)
  async updateSampleTodo(@Args() updateOneSampleTodoArgs: UpdateOneSampleTodoArgs) {
    return await this.sampleTodosService.update(updateOneSampleTodoArgs);
  }

  @Mutation(() => SampleTodo, { name: 'deleteSampleTodo' })
  async removeSampleTodo(@Args() deleteOneSampleTodoArgs: DeleteOneSampleTodoArgs) {
    return await this.sampleTodosService.remove(deleteOneSampleTodoArgs);
  }
}
