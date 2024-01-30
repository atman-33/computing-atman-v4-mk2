import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class UpdateBookmarkInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  id!: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  name!: string;

  @Field(() => Int, { nullable: true })
  @IsNumber()
  displayOrder?: number;
}
