import { AbstractModel } from '@libs/api/mongoose/shared';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SampleTodo extends AbstractModel {
  @Field()
  readonly content!: string;

  @Field()
  readonly editing!: boolean;

  @Field()
  readonly completed!: boolean;
}
