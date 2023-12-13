import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

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
}
