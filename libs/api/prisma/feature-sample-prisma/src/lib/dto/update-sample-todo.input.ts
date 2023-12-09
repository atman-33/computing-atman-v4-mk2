import { CreateSampleTodoInput } from './create-sample-todo.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSampleTodoInput extends PartialType(CreateSampleTodoInput) {
  @Field(() => Int)
  id: number;
}
