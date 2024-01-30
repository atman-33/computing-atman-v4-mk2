import { Field, InputType } from '@nestjs/graphql';
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
  @IsString()
  title?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  siteName?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  description?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  image?: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  bookmarkId!: string;
}
