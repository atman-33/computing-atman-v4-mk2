import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { LinkListRelationFilter } from '../link/link-list-relation-filter.input';

@InputType()
export class BookmarkWhereInput {

    @Field(() => [BookmarkWhereInput], {nullable:true})
    AND?: Array<BookmarkWhereInput>;

    @Field(() => [BookmarkWhereInput], {nullable:true})
    OR?: Array<BookmarkWhereInput>;

    @Field(() => [BookmarkWhereInput], {nullable:true})
    NOT?: Array<BookmarkWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    displayOrder?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => LinkListRelationFilter, {nullable:true})
    links?: LinkListRelationFilter;
}
