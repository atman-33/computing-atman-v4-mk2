import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LinkCountAggregate } from './link-count-aggregate.output';
import { LinkMinAggregate } from './link-min-aggregate.output';
import { LinkMaxAggregate } from './link-max-aggregate.output';

@ObjectType()
export class AggregateLink {

    @Field(() => LinkCountAggregate, {nullable:true})
    _count?: LinkCountAggregate;

    @Field(() => LinkMinAggregate, {nullable:true})
    _min?: LinkMinAggregate;

    @Field(() => LinkMaxAggregate, {nullable:true})
    _max?: LinkMaxAggregate;
}
