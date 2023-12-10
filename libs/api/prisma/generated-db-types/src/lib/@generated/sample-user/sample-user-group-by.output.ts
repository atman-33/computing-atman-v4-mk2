import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SampleUserCountAggregate } from './sample-user-count-aggregate.output';
import { SampleUserAvgAggregate } from './sample-user-avg-aggregate.output';
import { SampleUserSumAggregate } from './sample-user-sum-aggregate.output';
import { SampleUserMinAggregate } from './sample-user-min-aggregate.output';
import { SampleUserMaxAggregate } from './sample-user-max-aggregate.output';

@ObjectType()
export class SampleUserGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => Int, {nullable:false})
    age!: number;

    @Field(() => [String], {nullable:true})
    hobbies?: Array<string>;

    @Field(() => Boolean, {nullable:false})
    premiumAccount!: boolean;

    @Field(() => SampleUserCountAggregate, {nullable:true})
    _count?: SampleUserCountAggregate;

    @Field(() => SampleUserAvgAggregate, {nullable:true})
    _avg?: SampleUserAvgAggregate;

    @Field(() => SampleUserSumAggregate, {nullable:true})
    _sum?: SampleUserSumAggregate;

    @Field(() => SampleUserMinAggregate, {nullable:true})
    _min?: SampleUserMinAggregate;

    @Field(() => SampleUserMaxAggregate, {nullable:true})
    _max?: SampleUserMaxAggregate;
}
