import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { LinkOrderByRelationAggregateInput } from '../link/link-order-by-relation-aggregate.input';

@InputType()
export class BookmarkOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => LinkOrderByRelationAggregateInput, {nullable:true})
    links?: LinkOrderByRelationAggregateInput;
}
