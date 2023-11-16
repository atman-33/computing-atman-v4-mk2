import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class UpdateSampleUserInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  _id!: string;

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
