import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringListFilter } from '../prisma/string-list-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class SampleUserWhereInput {

    @Field(() => [SampleUserWhereInput], {nullable:true})
    AND?: Array<SampleUserWhereInput>;

    @Field(() => [SampleUserWhereInput], {nullable:true})
    OR?: Array<SampleUserWhereInput>;

    @Field(() => [SampleUserWhereInput], {nullable:true})
    NOT?: Array<SampleUserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    username?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    age?: IntFilter;

    @Field(() => StringListFilter, {nullable:true})
    hobbies?: StringListFilter;

    @Field(() => BoolFilter, {nullable:true})
    premiumAccount?: BoolFilter;
}
