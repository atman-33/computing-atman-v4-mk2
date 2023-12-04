import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Link {
  @Field()
  readonly url!: string;

  @Field()
  readonly title!: string;

  @Field({ nullable: true })
  readonly siteName?: string;

  @Field({ nullable: true })
  readonly description?: string;

  @Field(() => [String], { nullable: true })
  readonly images?: string[];
}
