import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BookmarkWhereUniqueInput } from './bookmark-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { BookmarkCreateInput } from './bookmark-create.input';
import { BookmarkUpdateInput } from './bookmark-update.input';

@ArgsType()
export class UpsertOneBookmarkArgs {

    @Field(() => BookmarkWhereUniqueInput, {nullable:false})
    @Type(() => BookmarkWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<BookmarkWhereUniqueInput, 'id'>;

    @Field(() => BookmarkCreateInput, {nullable:false})
    @Type(() => BookmarkCreateInput)
    create!: BookmarkCreateInput;

    @Field(() => BookmarkUpdateInput, {nullable:false})
    @Type(() => BookmarkUpdateInput)
    update!: BookmarkUpdateInput;
}
