import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSampleTodoInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
