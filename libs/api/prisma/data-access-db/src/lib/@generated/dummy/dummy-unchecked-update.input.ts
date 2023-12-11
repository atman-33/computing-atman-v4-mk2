import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class DummyUncheckedUpdateInput {

    @Field(() => Date, {nullable:true})
    date?: Date | string;

    @Field(() => Int, {nullable:true})
    int?: number;

    @Field(() => Float, {nullable:true})
    float?: number;

    @Field(() => String, {nullable:true})
    bytes?: Buffer;

    @Field(() => String, {nullable:true})
    bigInt?: bigint | number;

    @Field(() => GraphQLJSON, {nullable:true})
    json?: any;

    @Field(() => [String], {nullable:true})
    friends?: Array<string>;
}
