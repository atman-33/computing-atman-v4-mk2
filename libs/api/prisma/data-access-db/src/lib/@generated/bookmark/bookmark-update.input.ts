import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { LinkUpdateManyWithoutBookmarkNestedInput } from '../link/link-update-many-without-bookmark-nested.input';

@InputType()
export class BookmarkUpdateInput {

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;

    @Field(() => LinkUpdateManyWithoutBookmarkNestedInput, {nullable:true})
    links?: LinkUpdateManyWithoutBookmarkNestedInput;
}
