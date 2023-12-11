import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SampleUser {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => Int, {nullable:false})
    age!: number;

    @Field(() => [String], {nullable:true})
    hobbies!: Array<string>;

    @Field(() => Boolean, {nullable:false})
    premiumAccount!: boolean;
}
