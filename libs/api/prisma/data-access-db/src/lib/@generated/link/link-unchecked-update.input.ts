import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class LinkUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    url?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    title?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    siteName?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    description?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    image?: string;

    @Field(() => String, {nullable:true})
    bookmarkId?: string;
}
