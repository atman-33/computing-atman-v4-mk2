import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookmarkCreateManyInput } from './bookmark-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManyBookmarkArgs {

    @Field(() => [BookmarkCreateManyInput], {nullable:false})
    @Type(() => BookmarkCreateManyInput)
    @ValidateNested()
    data!: Array<BookmarkCreateManyInput>;
}
