import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BookmarkWhereUniqueInput } from './bookmark-where-unique.input';
import { Type } from 'class-transformer';
import { BookmarkCreateWithoutLinksInput } from './bookmark-create-without-links.input';

@InputType()
export class BookmarkCreateOrConnectWithoutLinksInput {

    @Field(() => BookmarkWhereUniqueInput, {nullable:false})
    @Type(() => BookmarkWhereUniqueInput)
    where!: Prisma.AtLeast<BookmarkWhereUniqueInput, 'id'>;

    @Field(() => BookmarkCreateWithoutLinksInput, {nullable:false})
    @Type(() => BookmarkCreateWithoutLinksInput)
    create!: BookmarkCreateWithoutLinksInput;
}
