import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { InputType } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Prisma } from '@prisma/client';
import * as Validator from 'class-validator';
import { ID } from '@nestjs/graphql';

export enum SampleScalarFieldEnum {
    id = "id",
    text = "text"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(SampleScalarFieldEnum, { name: 'SampleScalarFieldEnum', description: undefined })

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@ArgsType()
export class AggregateSampleRawArgs {
    @Field(() => [GraphQLJSON], {nullable:true})
    pipeline?: Array<any>;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@ArgsType()
export class FindSampleRawArgs {
    @Field(() => GraphQLJSON, {nullable:true})
    filter?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => IntFilter, {nullable:true})
    not?: InstanceType<typeof IntFilter>;
    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}

@ArgsType()
export class RunCommandRawArgs {
    @Field(() => GraphQLJSON, {nullable:false})
    command!: any;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => StringFilter, {nullable:true})
    not?: InstanceType<typeof StringFilter>;
    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    _min?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    _max?: InstanceType<typeof StringFilter>;
    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}

@ObjectType()
export class AggregateSample {
    @Field(() => SampleCountAggregate, {nullable:true})
    _count?: InstanceType<typeof SampleCountAggregate>;
    @Field(() => SampleMinAggregate, {nullable:true})
    _min?: InstanceType<typeof SampleMinAggregate>;
    @Field(() => SampleMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof SampleMaxAggregate>;
}

@ArgsType()
export class CreateManySampleArgs {
    @Field(() => [SampleCreateManyInput], {nullable:false})
    @Type(() => SampleCreateManyInput)
    @ValidateNested()
    data!: Array<SampleCreateManyInput>;
}

@ArgsType()
export class CreateOneSampleArgs {
    @Field(() => SampleCreateInput, {nullable:true})
    @Type(() => SampleCreateInput)
    @ValidateNested()
    data?: InstanceType<typeof SampleCreateInput>;
}

@ArgsType()
export class DeleteManySampleArgs {
    @Field(() => SampleWhereInput, {nullable:true})
    @Type(() => SampleWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SampleWhereInput>;
}

@ArgsType()
export class DeleteOneSampleArgs {
    @Field(() => SampleWhereUniqueInput, {nullable:false})
    @Type(() => SampleWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<SampleWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstSampleOrThrowArgs {
    @Field(() => SampleWhereInput, {nullable:true})
    @Type(() => SampleWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SampleWhereInput>;
    @Field(() => [SampleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SampleOrderByWithRelationInput>;
    @Field(() => SampleWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SampleWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SampleScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SampleScalarFieldEnum>;
}

@ArgsType()
export class FindFirstSampleArgs {
    @Field(() => SampleWhereInput, {nullable:true})
    @Type(() => SampleWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SampleWhereInput>;
    @Field(() => [SampleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SampleOrderByWithRelationInput>;
    @Field(() => SampleWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SampleWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SampleScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SampleScalarFieldEnum>;
}

@ArgsType()
export class FindManySampleArgs {
    @Field(() => SampleWhereInput, {nullable:true})
    @Type(() => SampleWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SampleWhereInput>;
    @Field(() => [SampleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SampleOrderByWithRelationInput>;
    @Field(() => SampleWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SampleWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SampleScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SampleScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueSampleOrThrowArgs {
    @Field(() => SampleWhereUniqueInput, {nullable:false})
    @Type(() => SampleWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<SampleWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueSampleArgs {
    @Field(() => SampleWhereUniqueInput, {nullable:false})
    @Type(() => SampleWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<SampleWhereUniqueInput, 'id'>;
}

@ArgsType()
export class SampleAggregateArgs {
    @Field(() => SampleWhereInput, {nullable:true})
    @Type(() => SampleWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SampleWhereInput>;
    @Field(() => [SampleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SampleOrderByWithRelationInput>;
    @Field(() => SampleWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SampleWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => SampleCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SampleCountAggregateInput>;
    @Field(() => SampleMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SampleMinAggregateInput>;
    @Field(() => SampleMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SampleMaxAggregateInput>;
}

@InputType()
export class SampleCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    text?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class SampleCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    text!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class SampleCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;
}

@InputType()
export class SampleCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    text?: string;
}

@InputType()
export class SampleCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    text?: string;
}

@ArgsType()
export class SampleGroupByArgs {
    @Field(() => SampleWhereInput, {nullable:true})
    @Type(() => SampleWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SampleWhereInput>;
    @Field(() => [SampleOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SampleOrderByWithAggregationInput>;
    @Field(() => [SampleScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SampleScalarFieldEnum>;
    @Field(() => SampleScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof SampleScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => SampleCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SampleCountAggregateInput>;
    @Field(() => SampleMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SampleMinAggregateInput>;
    @Field(() => SampleMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SampleMaxAggregateInput>;
}

@ObjectType()
export class SampleGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    text?: string;
    @Field(() => SampleCountAggregate, {nullable:true})
    _count?: InstanceType<typeof SampleCountAggregate>;
    @Field(() => SampleMinAggregate, {nullable:true})
    _min?: InstanceType<typeof SampleMinAggregate>;
    @Field(() => SampleMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof SampleMaxAggregate>;
}

@InputType()
export class SampleMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    text?: true;
}

@ObjectType()
export class SampleMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    text?: string;
}

@InputType()
export class SampleMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;
}

@InputType()
export class SampleMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    text?: true;
}

@ObjectType()
export class SampleMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    text?: string;
}

@InputType()
export class SampleMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;
}

@InputType()
export class SampleOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;
    @Field(() => SampleCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SampleCountOrderByAggregateInput>;
    @Field(() => SampleMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SampleMaxOrderByAggregateInput>;
    @Field(() => SampleMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SampleMinOrderByAggregateInput>;
}

@InputType()
export class SampleOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;
}

@InputType()
export class SampleScalarWhereWithAggregatesInput {
    @Field(() => [SampleScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SampleScalarWhereWithAggregatesInput>;
    @Field(() => [SampleScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SampleScalarWhereWithAggregatesInput>;
    @Field(() => [SampleScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SampleScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    text?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class SampleUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    text?: string;
}

@InputType()
export class SampleUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    text?: string;
}

@InputType()
export class SampleUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    text?: string;
}

@InputType()
export class SampleUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    text?: string;
}

@InputType()
export class SampleUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    text?: string;
}

@InputType()
export class SampleWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [SampleWhereInput], {nullable:true})
    AND?: Array<SampleWhereInput>;
    @Field(() => [SampleWhereInput], {nullable:true})
    OR?: Array<SampleWhereInput>;
    @Field(() => [SampleWhereInput], {nullable:true})
    NOT?: Array<SampleWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    text?: InstanceType<typeof StringFilter>;
}

@InputType()
export class SampleWhereInput {
    @Field(() => [SampleWhereInput], {nullable:true})
    AND?: Array<SampleWhereInput>;
    @Field(() => [SampleWhereInput], {nullable:true})
    OR?: Array<SampleWhereInput>;
    @Field(() => [SampleWhereInput], {nullable:true})
    NOT?: Array<SampleWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    text?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class Sample {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    text!: string | null;
}

@ArgsType()
export class UpdateManySampleArgs {
    @Field(() => SampleUpdateManyMutationInput, {nullable:false})
    @Type(() => SampleUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof SampleUpdateManyMutationInput>;
    @Field(() => SampleWhereInput, {nullable:true})
    @Type(() => SampleWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SampleWhereInput>;
}

@ArgsType()
export class UpdateOneSampleArgs {
    @Field(() => SampleUpdateInput, {nullable:false})
    @Type(() => SampleUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof SampleUpdateInput>;
    @Field(() => SampleWhereUniqueInput, {nullable:false})
    @Type(() => SampleWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<SampleWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneSampleArgs {
    @Field(() => SampleWhereUniqueInput, {nullable:false})
    @Type(() => SampleWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<SampleWhereUniqueInput, 'id'>;
    @Field(() => SampleCreateInput, {nullable:false})
    @Type(() => SampleCreateInput)
    create!: InstanceType<typeof SampleCreateInput>;
    @Field(() => SampleUpdateInput, {nullable:false})
    @Type(() => SampleUpdateInput)
    update!: InstanceType<typeof SampleUpdateInput>;
}
