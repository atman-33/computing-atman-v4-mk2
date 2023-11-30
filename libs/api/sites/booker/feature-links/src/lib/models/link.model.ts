import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Link {
  @Field()
  readonly title!: string;

  @Field({ nullable: true })
  readonly siteName?: string;

  @Field()
  readonly url!: string;

  @Field(() => [String], { nullable: true })
  readonly images?: string[];
}
