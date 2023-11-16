import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class DeleteSampleUserInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  _id!: string;
}
