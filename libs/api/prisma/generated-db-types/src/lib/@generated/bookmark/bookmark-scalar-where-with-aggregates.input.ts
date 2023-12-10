import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringListFilter } from '../prisma/string-list-filter.input';

@InputType()
export class BookmarkScalarWhereWithAggregatesInput {

    @Field(() => [BookmarkScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BookmarkScalarWhereWithAggregatesInput>;

    @Field(() => [BookmarkScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BookmarkScalarWhereWithAggregatesInput>;

    @Field(() => [BookmarkScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BookmarkScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => StringListFilter, {nullable:true})
    links?: StringListFilter;
}
