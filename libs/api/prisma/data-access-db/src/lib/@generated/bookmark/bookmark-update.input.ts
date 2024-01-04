import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { LinkUpdateManyWithoutBookmarkNestedInput } from '../link/link-update-many-without-bookmark-nested.input';

@InputType()
export class BookmarkUpdateInput {

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;

    @Field(() => Int, {nullable:true})
    displayOrder?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => LinkUpdateManyWithoutBookmarkNestedInput, {nullable:true})
    links?: LinkUpdateManyWithoutBookmarkNestedInput;
}
