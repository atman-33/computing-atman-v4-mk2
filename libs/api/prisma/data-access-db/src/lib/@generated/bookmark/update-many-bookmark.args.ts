import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookmarkUpdateManyMutationInput } from './bookmark-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { BookmarkWhereInput } from './bookmark-where.input';

@ArgsType()
export class UpdateManyBookmarkArgs {

    @Field(() => BookmarkUpdateManyMutationInput, {nullable:false})
    @Type(() => BookmarkUpdateManyMutationInput)
    @ValidateNested()
    data!: BookmarkUpdateManyMutationInput;

    @Field(() => BookmarkWhereInput, {nullable:true})
    @Type(() => BookmarkWhereInput)
    @ValidateNested()
    where?: BookmarkWhereInput;
}
