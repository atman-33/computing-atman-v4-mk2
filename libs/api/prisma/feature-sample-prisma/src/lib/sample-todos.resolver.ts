import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SampleTodosService } from './sample-todos.service';
import { SampleTodo } from './entities/sample-todo.entity';
import { CreateSampleTodoInput } from './dto/create-sample-todo.input';
import { UpdateSampleTodoInput } from './dto/update-sample-todo.input';

@Resolver(() => SampleTodo)
export class SampleTodosResolver {
  constructor(private readonly sampleTodosService: SampleTodosService) {}

  @Mutation(() => SampleTodo)
  createSampleTodo(@Args('createSampleTodoInput') createSampleTodoInput: CreateSampleTodoInput) {
    return this.sampleTodosService.create(createSampleTodoInput);
  }

  @Query(() => [SampleTodo], { name: 'sampleTodos' })
  findAll() {
    return this.sampleTodosService.findAll();
  }

  @Query(() => SampleTodo, { name: 'sampleTodo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.sampleTodosService.findOne(id);
  }

  @Mutation(() => SampleTodo)
  updateSampleTodo(@Args('updateSampleTodoInput') updateSampleTodoInput: UpdateSampleTodoInput) {
    return this.sampleTodosService.update(updateSampleTodoInput.id, updateSampleTodoInput);
  }

  @Mutation(() => SampleTodo)
  removeSampleTodo(@Args('id', { type: () => Int }) id: number) {
    return this.sampleTodosService.remove(id);
  }
}
