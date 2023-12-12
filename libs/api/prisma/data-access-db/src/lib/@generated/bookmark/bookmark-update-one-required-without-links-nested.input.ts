import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookmarkCreateWithoutLinksInput } from './bookmark-create-without-links.input';
import { Type } from 'class-transformer';
import { BookmarkCreateOrConnectWithoutLinksInput } from './bookmark-create-or-connect-without-links.input';
import { BookmarkUpsertWithoutLinksInput } from './bookmark-upsert-without-links.input';
import { Prisma } from '@prisma/client';
import { BookmarkWhereUniqueInput } from './bookmark-where-unique.input';
import { BookmarkUpdateToOneWithWhereWithoutLinksInput } from './bookmark-update-to-one-with-where-without-links.input';

@InputType()
export class BookmarkUpdateOneRequiredWithoutLinksNestedInput {

    @Field(() => BookmarkCreateWithoutLinksInput, {nullable:true})
    @Type(() => BookmarkCreateWithoutLinksInput)
    create?: BookmarkCreateWithoutLinksInput;

    @Field(() => BookmarkCreateOrConnectWithoutLinksInput, {nullable:true})
    @Type(() => BookmarkCreateOrConnectWithoutLinksInput)
    connectOrCreate?: BookmarkCreateOrConnectWithoutLinksInput;

    @Field(() => BookmarkUpsertWithoutLinksInput, {nullable:true})
    @Type(() => BookmarkUpsertWithoutLinksInput)
    upsert?: BookmarkUpsertWithoutLinksInput;

    @Field(() => BookmarkWhereUniqueInput, {nullable:true})
    @Type(() => BookmarkWhereUniqueInput)
    connect?: Prisma.AtLeast<BookmarkWhereUniqueInput, 'id'>;

    @Field(() => BookmarkUpdateToOneWithWhereWithoutLinksInput, {nullable:true})
    @Type(() => BookmarkUpdateToOneWithWhereWithoutLinksInput)
    update?: BookmarkUpdateToOneWithWhereWithoutLinksInput;
}
