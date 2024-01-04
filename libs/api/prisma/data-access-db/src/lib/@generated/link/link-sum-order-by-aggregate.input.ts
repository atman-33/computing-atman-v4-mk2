import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class LinkSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    displayOrder?: keyof typeof SortOrder;
}
