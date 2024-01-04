import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class LinkAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    displayOrder?: keyof typeof SortOrder;
}
