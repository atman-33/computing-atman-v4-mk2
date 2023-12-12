import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { LinkUncheckedCreateNestedManyWithoutBookmarkInput } from '../link/link-unchecked-create-nested-many-without-bookmark.input';

@InputType()
export class BookmarkUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    userId!: string;

    @Field(() => LinkUncheckedCreateNestedManyWithoutBookmarkInput, {nullable:true})
    links?: LinkUncheckedCreateNestedManyWithoutBookmarkInput;
}
