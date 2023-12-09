import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SampleTodosService } from '../sample-todos/sample-todos.service';
import {
  CreateOneSampleTodoArgs,
  DeleteOneSampleTodoArgs,
  FindUniqueSampleTodoArgs,
  UpdateOneSampleTodoArgs
} from './dto/sample-todo.dto';
import { SampleTodo } from './entities/sample-todo.entity';

@Resolver(() => SampleTodo)
export class SampleTodosResolver {
  constructor(private readonly sampleTodosService: SampleTodosService) {}

  @Mutation(() => SampleTodo)
  createSampleTodo(@Args() createOneSampleTodoArgs: CreateOneSampleTodoArgs) {
    return this.sampleTodosService.create(createOneSampleTodoArgs);
  }

  @Query(() => [SampleTodo], { name: 'sampleTodos' })
  findAll() {
    return this.sampleTodosService.findAll();
  }

  @Query(() => SampleTodo, { name: 'sampleTodo' })
  findOne(@Args() findUniqueSampleTodoArgs: FindUniqueSampleTodoArgs) {
    return this.sampleTodosService.findOne(findUniqueSampleTodoArgs);
  }

  @Mutation(() => SampleTodo)
  updateSampleTodo(@Args() updateOneSampleTodoArgs: UpdateOneSampleTodoArgs) {
    return this.sampleTodosService.update(updateOneSampleTodoArgs);
  }

  @Mutation(() => SampleTodo)
  removeSampleTodo(@Args() deleteOneSampleTodoArgs: DeleteOneSampleTodoArgs) {
    return this.sampleTodosService.remove(deleteOneSampleTodoArgs);
  }
}
