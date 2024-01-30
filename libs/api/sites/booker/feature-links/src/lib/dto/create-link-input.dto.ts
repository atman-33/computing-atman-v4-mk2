import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateLinkInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  bookmarkId!: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  url!: string;

  @Field(() => Int, { nullable: true })
  @IsNumber()
  displayOrder?: number;
}
