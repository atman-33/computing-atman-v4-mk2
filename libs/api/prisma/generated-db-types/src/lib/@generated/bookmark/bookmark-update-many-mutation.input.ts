import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class BookmarkUpdateManyMutationInput {

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;

    @Field(() => [String], {nullable:true})
    links?: Array<string>;
}
