import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class SampleUserUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => Int, {nullable:false})
    age!: number;

    @Field(() => [String], {nullable:true})
    hobbies?: Array<string>;

    @Field(() => Boolean, {nullable:false})
    premiumAccount!: boolean;
}
