import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SampleUserWhereInput } from './sample-user-where.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { SampleUserOrderByWithAggregationInput } from './sample-user-order-by-with-aggregation.input';
import { SampleUserScalarFieldEnum } from './sample-user-scalar-field.enum';
import { SampleUserScalarWhereWithAggregatesInput } from './sample-user-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SampleUserCountAggregateInput } from './sample-user-count-aggregate.input';
import { SampleUserAvgAggregateInput } from './sample-user-avg-aggregate.input';
import { SampleUserSumAggregateInput } from './sample-user-sum-aggregate.input';
import { SampleUserMinAggregateInput } from './sample-user-min-aggregate.input';
import { SampleUserMaxAggregateInput } from './sample-user-max-aggregate.input';

@ArgsType()
export class SampleUserGroupByArgs {

    @Field(() => SampleUserWhereInput, {nullable:true})
    @Type(() => SampleUserWhereInput)
    @ValidateNested()
    where?: SampleUserWhereInput;

    @Field(() => [SampleUserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SampleUserOrderByWithAggregationInput>;

    @Field(() => [SampleUserScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SampleUserScalarFieldEnum>;

    @Field(() => SampleUserScalarWhereWithAggregatesInput, {nullable:true})
    having?: SampleUserScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SampleUserCountAggregateInput, {nullable:true})
    _count?: SampleUserCountAggregateInput;

    @Field(() => SampleUserAvgAggregateInput, {nullable:true})
    _avg?: SampleUserAvgAggregateInput;

    @Field(() => SampleUserSumAggregateInput, {nullable:true})
    _sum?: SampleUserSumAggregateInput;

    @Field(() => SampleUserMinAggregateInput, {nullable:true})
    _min?: SampleUserMinAggregateInput;

    @Field(() => SampleUserMaxAggregateInput, {nullable:true})
    _max?: SampleUserMaxAggregateInput;
}
