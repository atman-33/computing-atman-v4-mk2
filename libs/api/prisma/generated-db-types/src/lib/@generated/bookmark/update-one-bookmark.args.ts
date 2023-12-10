import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookmarkUpdateInput } from './bookmark-update.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Prisma } from '@prisma/client';
import { BookmarkWhereUniqueInput } from './bookmark-where-unique.input';

@ArgsType()
export class UpdateOneBookmarkArgs {

    @Field(() => BookmarkUpdateInput, {nullable:false})
    @Type(() => BookmarkUpdateInput)
    @ValidateNested()
    data!: BookmarkUpdateInput;

    @Field(() => BookmarkWhereUniqueInput, {nullable:false})
    @Type(() => BookmarkWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<BookmarkWhereUniqueInput, 'id'>;
}
