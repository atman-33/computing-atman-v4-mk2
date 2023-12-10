import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SampleUserCountOrderByAggregateInput } from './sample-user-count-order-by-aggregate.input';
import { SampleUserAvgOrderByAggregateInput } from './sample-user-avg-order-by-aggregate.input';
import { SampleUserMaxOrderByAggregateInput } from './sample-user-max-order-by-aggregate.input';
import { SampleUserMinOrderByAggregateInput } from './sample-user-min-order-by-aggregate.input';
import { SampleUserSumOrderByAggregateInput } from './sample-user-sum-order-by-aggregate.input';

@InputType()
export class SampleUserOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    age?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hobbies?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    premiumAccount?: keyof typeof SortOrder;

    @Field(() => SampleUserCountOrderByAggregateInput, {nullable:true})
    _count?: SampleUserCountOrderByAggregateInput;

    @Field(() => SampleUserAvgOrderByAggregateInput, {nullable:true})
    _avg?: SampleUserAvgOrderByAggregateInput;

    @Field(() => SampleUserMaxOrderByAggregateInput, {nullable:true})
    _max?: SampleUserMaxOrderByAggregateInput;

    @Field(() => SampleUserMinOrderByAggregateInput, {nullable:true})
    _min?: SampleUserMinOrderByAggregateInput;

    @Field(() => SampleUserSumOrderByAggregateInput, {nullable:true})
    _sum?: SampleUserSumOrderByAggregateInput;
}
