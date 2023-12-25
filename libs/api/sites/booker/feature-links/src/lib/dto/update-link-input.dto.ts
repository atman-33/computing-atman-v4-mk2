import { Field, InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class UpdateLinkInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  id!: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  url!: string;

  @Field(() => String, { nullable: true })
  @Validator.IsString()
  title?: string;

  @Field(() => String, { nullable: true })
  @Validator.IsString()
  siteName?: string;

  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;

  @Field(() => String, { nullable: true })
  @Validator.IsString()
  image?: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  bookmarkId!: string;
}
