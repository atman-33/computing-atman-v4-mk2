import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BookmarkCountOrderByAggregateInput } from './bookmark-count-order-by-aggregate.input';
import { BookmarkMaxOrderByAggregateInput } from './bookmark-max-order-by-aggregate.input';
import { BookmarkMinOrderByAggregateInput } from './bookmark-min-order-by-aggregate.input';

@InputType()
export class BookmarkOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => BookmarkCountOrderByAggregateInput, {nullable:true})
    _count?: BookmarkCountOrderByAggregateInput;

    @Field(() => BookmarkMaxOrderByAggregateInput, {nullable:true})
    _max?: BookmarkMaxOrderByAggregateInput;

    @Field(() => BookmarkMinOrderByAggregateInput, {nullable:true})
    _min?: BookmarkMinOrderByAggregateInput;
}
