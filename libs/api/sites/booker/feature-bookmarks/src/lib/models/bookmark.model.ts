import { AbstractModel } from '@libs/api/mongoose/shared';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Bookmark extends AbstractModel {
  @Field()
  readonly name!: string;

  @Field()
  readonly userId!: string;

  @Field(() => [String])
  readonly links?: string[];
}
