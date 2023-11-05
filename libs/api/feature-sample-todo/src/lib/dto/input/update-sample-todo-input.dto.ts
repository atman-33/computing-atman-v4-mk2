import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class UpdateSampleTodoInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  _id!: string;

  @Field()
  @IsString()
  title!: string;

  @Field()
  @IsBoolean()
  editing!: boolean;

  @Field()
  @IsBoolean()
  completed!: boolean;
}
