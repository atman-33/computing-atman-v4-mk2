import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

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
}
