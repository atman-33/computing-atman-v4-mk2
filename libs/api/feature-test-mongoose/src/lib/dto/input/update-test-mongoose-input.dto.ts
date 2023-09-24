import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class UpdateTestMongooseInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  _id!: string;

  @Field()
  @IsString()
  text?: string;

  @Field()
  @IsNumber()
  value?: number;
}