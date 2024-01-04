import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

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

  @Field(() => Int, { nullable: true })
  @IsNumber()
  displayOrder?: number;

  @Field()
  @IsNotEmpty()
  @IsString()
  bookmarkId!: string;
}
