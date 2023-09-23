import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateTestMongooseInput {
  @Field()
  @IsString()
  text?: string;

  @Field()
  @IsNumber()
  value?: number;
}
