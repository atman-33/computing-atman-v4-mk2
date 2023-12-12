import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookmarkCreateWithoutLinksInput } from './bookmark-create-without-links.input';
import { Type } from 'class-transformer';
import { BookmarkCreateOrConnectWithoutLinksInput } from './bookmark-create-or-connect-without-links.input';
import { Prisma } from '@prisma/client';
import { BookmarkWhereUniqueInput } from './bookmark-where-unique.input';

@InputType()
export class BookmarkCreateNestedOneWithoutLinksInput {

    @Field(() => BookmarkCreateWithoutLinksInput, {nullable:true})
    @Type(() => BookmarkCreateWithoutLinksInput)
    create?: BookmarkCreateWithoutLinksInput;

    @Field(() => BookmarkCreateOrConnectWithoutLinksInput, {nullable:true})
    @Type(() => BookmarkCreateOrConnectWithoutLinksInput)
    connectOrCreate?: BookmarkCreateOrConnectWithoutLinksInput;

    @Field(() => BookmarkWhereUniqueInput, {nullable:true})
    @Type(() => BookmarkWhereUniqueInput)
    connect?: Prisma.AtLeast<BookmarkWhereUniqueInput, 'id'>;
}
