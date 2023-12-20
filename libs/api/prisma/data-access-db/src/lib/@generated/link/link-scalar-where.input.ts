import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class LinkScalarWhereInput {

    @Field(() => [LinkScalarWhereInput], {nullable:true})
    AND?: Array<LinkScalarWhereInput>;

    @Field(() => [LinkScalarWhereInput], {nullable:true})
    OR?: Array<LinkScalarWhereInput>;

    @Field(() => [LinkScalarWhereInput], {nullable:true})
    NOT?: Array<LinkScalarWhereInput>;

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

    @Field(() => StringFilter, {nullable:true})
    bookmarkId?: StringFilter;
}
