import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LinkScalarWhereInput } from './link-scalar-where.input';
import { Type } from 'class-transformer';
import { LinkUpdateManyMutationInput } from './link-update-many-mutation.input';

@InputType()
export class LinkUpdateManyWithWhereWithoutBookmarkInput {

    @Field(() => LinkScalarWhereInput, {nullable:false})
    @Type(() => LinkScalarWhereInput)
    where!: LinkScalarWhereInput;

    @Field(() => LinkUpdateManyMutationInput, {nullable:false})
    @Type(() => LinkUpdateManyMutationInput)
    data!: LinkUpdateManyMutationInput;
}
