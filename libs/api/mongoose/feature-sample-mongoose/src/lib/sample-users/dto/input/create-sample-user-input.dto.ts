import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateSampleUserInput {
  @Field()
  @IsString()
  username!: string;

  @Field()
  @IsNumber()
  age!: number;

  @Field(() => [String], { nullable: true })
  @IsString({ each: true })
  hobbies?: string[];

  @Field()
  @IsBoolean()
  premiumAccount!: boolean;
}
