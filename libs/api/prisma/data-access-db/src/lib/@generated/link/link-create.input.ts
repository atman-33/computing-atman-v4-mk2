import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { BookmarkCreateNestedOneWithoutLinksInput } from '../bookmark/bookmark-create-nested-one-without-links.input';

@InputType()
export class LinkCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    url!: string;

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

    @Field(() => BookmarkCreateNestedOneWithoutLinksInput, {nullable:false})
    bookmark!: BookmarkCreateNestedOneWithoutLinksInput;
}
