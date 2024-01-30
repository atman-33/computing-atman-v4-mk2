import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BookmarkRelationFilter } from '../bookmark/bookmark-relation-filter.input';

@InputType()
export class LinkWhereInput {

    @Field(() => [LinkWhereInput], {nullable:true})
    AND?: Array<LinkWhereInput>;

    @Field(() => [LinkWhereInput], {nullable:true})
    OR?: Array<LinkWhereInput>;

    @Field(() => [LinkWhereInput], {nullable:true})
    NOT?: Array<LinkWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    siteName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    image?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    displayOrder?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    bookmarkId?: StringFilter;

    @Field(() => BookmarkRelationFilter, {nullable:true})
    bookmark?: BookmarkRelationFilter;
}
