import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { LinkCountOrderByAggregateInput } from './link-count-order-by-aggregate.input';
import { LinkMaxOrderByAggregateInput } from './link-max-order-by-aggregate.input';
import { LinkMinOrderByAggregateInput } from './link-min-order-by-aggregate.input';

@InputType()
export class LinkOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    siteName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bookmarkId?: keyof typeof SortOrder;

    @Field(() => LinkCountOrderByAggregateInput, {nullable:true})
    _count?: LinkCountOrderByAggregateInput;

    @Field(() => LinkMaxOrderByAggregateInput, {nullable:true})
    _max?: LinkMaxOrderByAggregateInput;

    @Field(() => LinkMinOrderByAggregateInput, {nullable:true})
    _min?: LinkMinOrderByAggregateInput;
}
