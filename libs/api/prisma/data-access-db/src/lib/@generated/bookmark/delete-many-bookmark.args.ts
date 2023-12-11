import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookmarkWhereInput } from './bookmark-where.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class DeleteManyBookmarkArgs {

    @Field(() => BookmarkWhereInput, {nullable:true})
    @Type(() => BookmarkWhereInput)
    @ValidateNested()
    where?: BookmarkWhereInput;
}
