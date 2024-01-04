import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LinkWhereInput } from './link-where.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { LinkOrderByWithAggregationInput } from './link-order-by-with-aggregation.input';
import { LinkScalarFieldEnum } from './link-scalar-field.enum';
import { LinkScalarWhereWithAggregatesInput } from './link-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { LinkCountAggregateInput } from './link-count-aggregate.input';
import { LinkAvgAggregateInput } from './link-avg-aggregate.input';
import { LinkSumAggregateInput } from './link-sum-aggregate.input';
import { LinkMinAggregateInput } from './link-min-aggregate.input';
import { LinkMaxAggregateInput } from './link-max-aggregate.input';

@ArgsType()
export class LinkGroupByArgs {

    @Field(() => LinkWhereInput, {nullable:true})
    @Type(() => LinkWhereInput)
    @ValidateNested()
    where?: LinkWhereInput;

    @Field(() => [LinkOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<LinkOrderByWithAggregationInput>;

    @Field(() => [LinkScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof LinkScalarFieldEnum>;

    @Field(() => LinkScalarWhereWithAggregatesInput, {nullable:true})
    having?: LinkScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => LinkCountAggregateInput, {nullable:true})
    _count?: LinkCountAggregateInput;

    @Field(() => LinkAvgAggregateInput, {nullable:true})
    _avg?: LinkAvgAggregateInput;

    @Field(() => LinkSumAggregateInput, {nullable:true})
    _sum?: LinkSumAggregateInput;

    @Field(() => LinkMinAggregateInput, {nullable:true})
    _min?: LinkMinAggregateInput;

    @Field(() => LinkMaxAggregateInput, {nullable:true})
    _max?: LinkMaxAggregateInput;
}
