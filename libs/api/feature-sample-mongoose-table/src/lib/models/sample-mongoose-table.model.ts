import { AbstractModel } from '@libs/api/mongoose/shared';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SampleMongooseTable extends AbstractModel {
  @Field()
  readonly text?: string;

  @Field()
  readonly value?: number;
}
