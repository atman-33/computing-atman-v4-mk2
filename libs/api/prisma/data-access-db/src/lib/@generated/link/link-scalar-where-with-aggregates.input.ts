import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class LinkScalarWhereWithAggregatesInput {

    @Field(() => [LinkScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LinkScalarWhereWithAggregatesInput>;

    @Field(() => [LinkScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LinkScalarWhereWithAggregatesInput>;

    @Field(() => [LinkScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LinkScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    url?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    siteName?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    image?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    bookmarkId?: StringWithAggregatesFilter;
}
