import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsString } from 'class-validator';

@InputType()
export class CreateSampleTodoInput {
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
