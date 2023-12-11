import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SampleUserSumAggregate {

    @Field(() => Int, {nullable:true})
    age?: number;
}
