import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LinkCountAggregate } from './link-count-aggregate.output';
import { LinkAvgAggregate } from './link-avg-aggregate.output';
import { LinkSumAggregate } from './link-sum-aggregate.output';
import { LinkMinAggregate } from './link-min-aggregate.output';
import { LinkMaxAggregate } from './link-max-aggregate.output';

@ObjectType()
export class AggregateLink {

    @Field(() => LinkCountAggregate, {nullable:true})
    _count?: LinkCountAggregate;

    @Field(() => LinkAvgAggregate, {nullable:true})
    _avg?: LinkAvgAggregate;

    @Field(() => LinkSumAggregate, {nullable:true})
    _sum?: LinkSumAggregate;

    @Field(() => LinkMinAggregate, {nullable:true})
    _min?: LinkMinAggregate;

    @Field(() => LinkMaxAggregate, {nullable:true})
    _max?: LinkMaxAggregate;
}
