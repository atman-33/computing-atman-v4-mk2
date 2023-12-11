import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BookmarkWhereUniqueInput } from './bookmark-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class FindUniqueBookmarkOrThrowArgs {

    @Field(() => BookmarkWhereUniqueInput, {nullable:false})
    @Type(() => BookmarkWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<BookmarkWhereUniqueInput, 'id'>;
}
