import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LinkCreateManyBookmarkInput } from './link-create-many-bookmark.input';
import { Type } from 'class-transformer';

@InputType()
export class LinkCreateManyBookmarkInputEnvelope {

    @Field(() => [LinkCreateManyBookmarkInput], {nullable:false})
    @Type(() => LinkCreateManyBookmarkInput)
    data!: Array<LinkCreateManyBookmarkInput>;
}
