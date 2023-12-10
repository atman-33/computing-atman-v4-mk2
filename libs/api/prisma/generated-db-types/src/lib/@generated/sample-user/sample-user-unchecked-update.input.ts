import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class SampleUserUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => Int, {nullable:true})
    age?: number;

    @Field(() => [String], {nullable:true})
    hobbies?: Array<string>;

    @Field(() => Boolean, {nullable:true})
    premiumAccount?: boolean;
}
