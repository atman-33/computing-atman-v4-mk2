import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookmarkCreateInput } from './bookmark-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneBookmarkArgs {

    @Field(() => BookmarkCreateInput, {nullable:false})
    @Type(() => BookmarkCreateInput)
    @ValidateNested()
    data!: BookmarkCreateInput;
}
