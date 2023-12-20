import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LinkWhereInput } from './link-where.input';

@InputType()
export class LinkListRelationFilter {

    @Field(() => LinkWhereInput, {nullable:true})
    every?: LinkWhereInput;

    @Field(() => LinkWhereInput, {nullable:true})
    some?: LinkWhereInput;

    @Field(() => LinkWhereInput, {nullable:true})
    none?: LinkWhereInput;
}
