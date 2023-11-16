import { AbstractModel } from '@libs/api/mongoose/shared';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SampleUser extends AbstractModel {
  @Field()
  readonly username!: string;

  @Field()
  readonly age!: number;

  @Field(() => [String], { nullable: true })
  readonly hobbies?: string[];

  @Field()
  readonly premiumAccount!: boolean;
}
