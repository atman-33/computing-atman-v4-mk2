import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class BookmarkUncheckedCreateWithoutLinksInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    userId!: string;
}
