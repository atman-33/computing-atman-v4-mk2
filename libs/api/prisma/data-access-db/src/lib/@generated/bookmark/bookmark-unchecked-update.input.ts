import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { LinkUncheckedUpdateManyWithoutBookmarkNestedInput } from '../link/link-unchecked-update-many-without-bookmark-nested.input';

@InputType()
export class BookmarkUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;

    @Field(() => LinkUncheckedUpdateManyWithoutBookmarkNestedInput, {nullable:true})
    links?: LinkUncheckedUpdateManyWithoutBookmarkNestedInput;
}
