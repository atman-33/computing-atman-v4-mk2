import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

export enum SampleTodoScalarFieldEnum {
    id = "id",
    content = "content",
    editing = "editing",
    completed = "completed"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum BaseModelScalarFieldEnum {
    id = "id",
    text = "text",
    int = "int",
    float = "float",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

registerEnumType(BaseModelScalarFieldEnum, { name: 'BaseModelScalarFieldEnum', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(SampleTodoScalarFieldEnum, { name: 'SampleTodoScalarFieldEnum', description: undefined })

@ObjectType()
export class AggregateBaseModel {
    @Field(() => BaseModelCountAggregate, {nullable:true})
    _count?: InstanceType<typeof BaseModelCountAggregate>;
    @Field(() => BaseModelAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof BaseModelAvgAggregate>;
    @Field(() => BaseModelSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof BaseModelSumAggregate>;
    @Field(() => BaseModelMinAggregate, {nullable:true})
    _min?: InstanceType<typeof BaseModelMinAggregate>;
    @Field(() => BaseModelMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof BaseModelMaxAggregate>;
}

@ArgsType()
export class BaseModelAggregateArgs {
    @Field(() => BaseModelWhereInput, {nullable:true})
    @Type(() => BaseModelWhereInput)
    where?: InstanceType<typeof BaseModelWhereInput>;
    @Field(() => [BaseModelOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BaseModelOrderByWithRelationInput>;
    @Field(() => BaseModelWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BaseModelWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => BaseModelCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof BaseModelCountAggregateInput>;
    @Field(() => BaseModelAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof BaseModelAvgAggregateInput>;
    @Field(() => BaseModelSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof BaseModelSumAggregateInput>;
    @Field(() => BaseModelMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof BaseModelMinAggregateInput>;
    @Field(() => BaseModelMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof BaseModelMaxAggregateInput>;
}

@InputType()
export class BaseModelAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    int?: true;
    @Field(() => Boolean, {nullable:true})
    float?: true;
}

@ObjectType()
export class BaseModelAvgAggregate {
    @Field(() => Float, {nullable:true})
    int?: number;
    @Field(() => Float, {nullable:true})
    float?: number;
}

@InputType()
export class BaseModelAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    int?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    float?: keyof typeof SortOrder;
}

@InputType()
export class BaseModelCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    text?: true;
    @Field(() => Boolean, {nullable:true})
    int?: true;
    @Field(() => Boolean, {nullable:true})
    float?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class BaseModelCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    text!: number;
    @Field(() => Int, {nullable:false})
    int!: number;
    @Field(() => Int, {nullable:false})
    float!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class BaseModelCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    int?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    float?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class BaseModelCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    text?: string;
    @Field(() => Int, {nullable:true})
    int?: number;
    @Field(() => Float, {nullable:true})
    float?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class BaseModelCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    text?: string;
    @Field(() => Int, {nullable:true})
    int?: number;
    @Field(() => Float, {nullable:true})
    float?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@ArgsType()
export class BaseModelGroupByArgs {
    @Field(() => BaseModelWhereInput, {nullable:true})
    @Type(() => BaseModelWhereInput)
    where?: InstanceType<typeof BaseModelWhereInput>;
    @Field(() => [BaseModelOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BaseModelOrderByWithAggregationInput>;
    @Field(() => [BaseModelScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BaseModelScalarFieldEnum>;
    @Field(() => BaseModelScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof BaseModelScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => BaseModelCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof BaseModelCountAggregateInput>;
    @Field(() => BaseModelAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof BaseModelAvgAggregateInput>;
    @Field(() => BaseModelSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof BaseModelSumAggregateInput>;
    @Field(() => BaseModelMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof BaseModelMinAggregateInput>;
    @Field(() => BaseModelMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof BaseModelMaxAggregateInput>;
}

@ObjectType()
export class BaseModelGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    text?: string;
    @Field(() => Int, {nullable:true})
    int?: number;
    @Field(() => Float, {nullable:true})
    float?: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => BaseModelCountAggregate, {nullable:true})
    _count?: InstanceType<typeof BaseModelCountAggregate>;
    @Field(() => BaseModelAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof BaseModelAvgAggregate>;
    @Field(() => BaseModelSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof BaseModelSumAggregate>;
    @Field(() => BaseModelMinAggregate, {nullable:true})
    _min?: InstanceType<typeof BaseModelMinAggregate>;
    @Field(() => BaseModelMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof BaseModelMaxAggregate>;
}

@InputType()
export class BaseModelMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    text?: true;
    @Field(() => Boolean, {nullable:true})
    int?: true;
    @Field(() => Boolean, {nullable:true})
    float?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class BaseModelMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    text?: string;
    @Field(() => Int, {nullable:true})
    int?: number;
    @Field(() => Float, {nullable:true})
    float?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class BaseModelMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    int?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    float?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class BaseModelMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    text?: true;
    @Field(() => Boolean, {nullable:true})
    int?: true;
    @Field(() => Boolean, {nullable:true})
    float?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class BaseModelMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    text?: string;
    @Field(() => Int, {nullable:true})
    int?: number;
    @Field(() => Float, {nullable:true})
    float?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class BaseModelMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    int?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    float?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class BaseModelOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    int?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    float?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => BaseModelCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof BaseModelCountOrderByAggregateInput>;
    @Field(() => BaseModelAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof BaseModelAvgOrderByAggregateInput>;
    @Field(() => BaseModelMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof BaseModelMaxOrderByAggregateInput>;
    @Field(() => BaseModelMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof BaseModelMinOrderByAggregateInput>;
    @Field(() => BaseModelSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof BaseModelSumOrderByAggregateInput>;
}

@InputType()
export class BaseModelOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    int?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    float?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class BaseModelScalarWhereWithAggregatesInput {
    @Field(() => [BaseModelScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BaseModelScalarWhereWithAggregatesInput>;
    @Field(() => [BaseModelScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BaseModelScalarWhereWithAggregatesInput>;
    @Field(() => [BaseModelScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BaseModelScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    text?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    int?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    float?: InstanceType<typeof FloatWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class BaseModelSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    int?: true;
    @Field(() => Boolean, {nullable:true})
    float?: true;
}

@ObjectType()
export class BaseModelSumAggregate {
    @Field(() => Int, {nullable:true})
    int?: number;
    @Field(() => Float, {nullable:true})
    float?: number;
}

@InputType()
export class BaseModelSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    int?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    float?: keyof typeof SortOrder;
}

@InputType()
export class BaseModelUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    text?: string;
    @Field(() => Int, {nullable:true})
    int?: number;
    @Field(() => Float, {nullable:true})
    float?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class BaseModelUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    text?: string;
    @Field(() => Int, {nullable:true})
    int?: number;
    @Field(() => Float, {nullable:true})
    float?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class BaseModelUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    text?: string;
    @Field(() => Int, {nullable:true})
    int?: number;
    @Field(() => Float, {nullable:true})
    float?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class BaseModelUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    text?: string;
    @Field(() => Int, {nullable:true})
    int?: number;
    @Field(() => Float, {nullable:true})
    float?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class BaseModelUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    text?: string;
    @Field(() => Int, {nullable:true})
    int?: number;
    @Field(() => Float, {nullable:true})
    float?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class BaseModelWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [BaseModelWhereInput], {nullable:true})
    AND?: Array<BaseModelWhereInput>;
    @Field(() => [BaseModelWhereInput], {nullable:true})
    OR?: Array<BaseModelWhereInput>;
    @Field(() => [BaseModelWhereInput], {nullable:true})
    NOT?: Array<BaseModelWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    text?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    int?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    float?: InstanceType<typeof FloatFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class BaseModelWhereInput {
    @Field(() => [BaseModelWhereInput], {nullable:true})
    AND?: Array<BaseModelWhereInput>;
    @Field(() => [BaseModelWhereInput], {nullable:true})
    OR?: Array<BaseModelWhereInput>;
    @Field(() => [BaseModelWhereInput], {nullable:true})
    NOT?: Array<BaseModelWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    text?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    int?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    float?: InstanceType<typeof FloatFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class BaseModel {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    text!: string | null;
    /** @Validator .@IsInt() */
    @Field(() => Int, {nullable:true,description:'@Validator.@IsInt()'})
    int!: number | null;
    @Field(() => Float, {nullable:true})
    float!: number | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}

@ArgsType()
export class CreateManyBaseModelArgs {
    @Field(() => [BaseModelCreateManyInput], {nullable:false})
    @Type(() => BaseModelCreateManyInput)
    data!: Array<BaseModelCreateManyInput>;
}

@ArgsType()
export class CreateOneBaseModelArgs {
    @Field(() => BaseModelCreateInput, {nullable:false})
    @Type(() => BaseModelCreateInput)
    data!: InstanceType<typeof BaseModelCreateInput>;
}

@ArgsType()
export class DeleteManyBaseModelArgs {
    @Field(() => BaseModelWhereInput, {nullable:true})
    @Type(() => BaseModelWhereInput)
    where?: InstanceType<typeof BaseModelWhereInput>;
}

@ArgsType()
export class DeleteOneBaseModelArgs {
    @Field(() => BaseModelWhereUniqueInput, {nullable:false})
    @Type(() => BaseModelWhereUniqueInput)
    where!: Prisma.AtLeast<BaseModelWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstBaseModelOrThrowArgs {
    @Field(() => BaseModelWhereInput, {nullable:true})
    @Type(() => BaseModelWhereInput)
    where?: InstanceType<typeof BaseModelWhereInput>;
    @Field(() => [BaseModelOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BaseModelOrderByWithRelationInput>;
    @Field(() => BaseModelWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BaseModelWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [BaseModelScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BaseModelScalarFieldEnum>;
}

@ArgsType()
export class FindFirstBaseModelArgs {
    @Field(() => BaseModelWhereInput, {nullable:true})
    @Type(() => BaseModelWhereInput)
    where?: InstanceType<typeof BaseModelWhereInput>;
    @Field(() => [BaseModelOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BaseModelOrderByWithRelationInput>;
    @Field(() => BaseModelWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BaseModelWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [BaseModelScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BaseModelScalarFieldEnum>;
}

@ArgsType()
export class FindManyBaseModelArgs {
    @Field(() => BaseModelWhereInput, {nullable:true})
    @Type(() => BaseModelWhereInput)
    where?: InstanceType<typeof BaseModelWhereInput>;
    @Field(() => [BaseModelOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BaseModelOrderByWithRelationInput>;
    @Field(() => BaseModelWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BaseModelWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [BaseModelScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BaseModelScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueBaseModelOrThrowArgs {
    @Field(() => BaseModelWhereUniqueInput, {nullable:false})
    @Type(() => BaseModelWhereUniqueInput)
    where!: Prisma.AtLeast<BaseModelWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueBaseModelArgs {
    @Field(() => BaseModelWhereUniqueInput, {nullable:false})
    @Type(() => BaseModelWhereUniqueInput)
    where!: Prisma.AtLeast<BaseModelWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpdateManyBaseModelArgs {
    @Field(() => BaseModelUpdateManyMutationInput, {nullable:false})
    @Type(() => BaseModelUpdateManyMutationInput)
    data!: InstanceType<typeof BaseModelUpdateManyMutationInput>;
    @Field(() => BaseModelWhereInput, {nullable:true})
    @Type(() => BaseModelWhereInput)
    where?: InstanceType<typeof BaseModelWhereInput>;
}

@ArgsType()
export class UpdateOneBaseModelArgs {
    @Field(() => BaseModelUpdateInput, {nullable:false})
    @Type(() => BaseModelUpdateInput)
    data!: InstanceType<typeof BaseModelUpdateInput>;
    @Field(() => BaseModelWhereUniqueInput, {nullable:false})
    @Type(() => BaseModelWhereUniqueInput)
    where!: Prisma.AtLeast<BaseModelWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneBaseModelArgs {
    @Field(() => BaseModelWhereUniqueInput, {nullable:false})
    @Type(() => BaseModelWhereUniqueInput)
    where!: Prisma.AtLeast<BaseModelWhereUniqueInput, 'id'>;
    @Field(() => BaseModelCreateInput, {nullable:false})
    @Type(() => BaseModelCreateInput)
    create!: InstanceType<typeof BaseModelCreateInput>;
    @Field(() => BaseModelUpdateInput, {nullable:false})
    @Type(() => BaseModelUpdateInput)
    update!: InstanceType<typeof BaseModelUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@ArgsType()
export class AggregateBaseModelRawArgs {
    @Field(() => [GraphQLJSON], {nullable:true})
    pipeline?: Array<any>;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@ArgsType()
export class AggregateSampleTodoRawArgs {
    @Field(() => [GraphQLJSON], {nullable:true})
    pipeline?: Array<any>;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@InputType()
export class BoolFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => BoolFilter, {nullable:true})
    not?: InstanceType<typeof BoolFilter>;
}

@InputType()
export class BoolWithAggregatesFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => BoolFilter, {nullable:true})
    _min?: InstanceType<typeof BoolFilter>;
    @Field(() => BoolFilter, {nullable:true})
    _max?: InstanceType<typeof BoolFilter>;
}

@InputType()
export class DateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => DateTimeFilter, {nullable:true})
    not?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof DateTimeFilter>;
}

@ArgsType()
export class FindBaseModelRawArgs {
    @Field(() => GraphQLJSON, {nullable:true})
    filter?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@ArgsType()
export class FindSampleTodoRawArgs {
    @Field(() => GraphQLJSON, {nullable:true})
    filter?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@InputType()
export class FloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => FloatFilter, {nullable:true})
    not?: InstanceType<typeof FloatFilter>;
    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}

@InputType()
export class FloatWithAggregatesFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof FloatWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _avg?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _sum?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _min?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _max?: InstanceType<typeof FloatFilter>;
    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
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

@InputType()
export class IntWithAggregatesFilter {
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
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _avg?: InstanceType<typeof FloatFilter>;
    @Field(() => IntFilter, {nullable:true})
    _sum?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    _min?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    _max?: InstanceType<typeof IntFilter>;
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
export class AggregateSampleTodo {
    @Field(() => SampleTodoCountAggregate, {nullable:true})
    _count?: InstanceType<typeof SampleTodoCountAggregate>;
    @Field(() => SampleTodoMinAggregate, {nullable:true})
    _min?: InstanceType<typeof SampleTodoMinAggregate>;
    @Field(() => SampleTodoMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof SampleTodoMaxAggregate>;
}

@ArgsType()
export class CreateManySampleTodoArgs {
    @Field(() => [SampleTodoCreateManyInput], {nullable:false})
    @Type(() => SampleTodoCreateManyInput)
    data!: Array<SampleTodoCreateManyInput>;
}

@ArgsType()
export class CreateOneSampleTodoArgs {
    @Field(() => SampleTodoCreateInput, {nullable:false})
    @Type(() => SampleTodoCreateInput)
    data!: InstanceType<typeof SampleTodoCreateInput>;
}

@ArgsType()
export class DeleteManySampleTodoArgs {
    @Field(() => SampleTodoWhereInput, {nullable:true})
    @Type(() => SampleTodoWhereInput)
    where?: InstanceType<typeof SampleTodoWhereInput>;
}

@ArgsType()
export class DeleteOneSampleTodoArgs {
    @Field(() => SampleTodoWhereUniqueInput, {nullable:false})
    @Type(() => SampleTodoWhereUniqueInput)
    where!: Prisma.AtLeast<SampleTodoWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstSampleTodoOrThrowArgs {
    @Field(() => SampleTodoWhereInput, {nullable:true})
    @Type(() => SampleTodoWhereInput)
    where?: InstanceType<typeof SampleTodoWhereInput>;
    @Field(() => [SampleTodoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SampleTodoOrderByWithRelationInput>;
    @Field(() => SampleTodoWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SampleTodoWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SampleTodoScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SampleTodoScalarFieldEnum>;
}

@ArgsType()
export class FindFirstSampleTodoArgs {
    @Field(() => SampleTodoWhereInput, {nullable:true})
    @Type(() => SampleTodoWhereInput)
    where?: InstanceType<typeof SampleTodoWhereInput>;
    @Field(() => [SampleTodoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SampleTodoOrderByWithRelationInput>;
    @Field(() => SampleTodoWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SampleTodoWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SampleTodoScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SampleTodoScalarFieldEnum>;
}

@ArgsType()
export class FindManySampleTodoArgs {
    @Field(() => SampleTodoWhereInput, {nullable:true})
    @Type(() => SampleTodoWhereInput)
    where?: InstanceType<typeof SampleTodoWhereInput>;
    @Field(() => [SampleTodoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SampleTodoOrderByWithRelationInput>;
    @Field(() => SampleTodoWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SampleTodoWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SampleTodoScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SampleTodoScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueSampleTodoOrThrowArgs {
    @Field(() => SampleTodoWhereUniqueInput, {nullable:false})
    @Type(() => SampleTodoWhereUniqueInput)
    where!: Prisma.AtLeast<SampleTodoWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueSampleTodoArgs {
    @Field(() => SampleTodoWhereUniqueInput, {nullable:false})
    @Type(() => SampleTodoWhereUniqueInput)
    where!: Prisma.AtLeast<SampleTodoWhereUniqueInput, 'id'>;
}

@ArgsType()
export class SampleTodoAggregateArgs {
    @Field(() => SampleTodoWhereInput, {nullable:true})
    @Type(() => SampleTodoWhereInput)
    where?: InstanceType<typeof SampleTodoWhereInput>;
    @Field(() => [SampleTodoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SampleTodoOrderByWithRelationInput>;
    @Field(() => SampleTodoWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SampleTodoWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => SampleTodoCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SampleTodoCountAggregateInput>;
    @Field(() => SampleTodoMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SampleTodoMinAggregateInput>;
    @Field(() => SampleTodoMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SampleTodoMaxAggregateInput>;
}

@InputType()
export class SampleTodoCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    editing?: true;
    @Field(() => Boolean, {nullable:true})
    completed?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class SampleTodoCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    content!: number;
    @Field(() => Int, {nullable:false})
    editing!: number;
    @Field(() => Int, {nullable:false})
    completed!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class SampleTodoCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    editing?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    completed?: keyof typeof SortOrder;
}

@InputType()
export class SampleTodoCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    content!: string;
    @Field(() => Boolean, {nullable:false})
    editing!: boolean;
    @Field(() => Boolean, {nullable:false})
    completed!: boolean;
}

@InputType()
export class SampleTodoCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    content!: string;
    @Field(() => Boolean, {nullable:false})
    editing!: boolean;
    @Field(() => Boolean, {nullable:false})
    completed!: boolean;
}

@ArgsType()
export class SampleTodoGroupByArgs {
    @Field(() => SampleTodoWhereInput, {nullable:true})
    @Type(() => SampleTodoWhereInput)
    where?: InstanceType<typeof SampleTodoWhereInput>;
    @Field(() => [SampleTodoOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SampleTodoOrderByWithAggregationInput>;
    @Field(() => [SampleTodoScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SampleTodoScalarFieldEnum>;
    @Field(() => SampleTodoScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof SampleTodoScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => SampleTodoCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SampleTodoCountAggregateInput>;
    @Field(() => SampleTodoMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SampleTodoMinAggregateInput>;
    @Field(() => SampleTodoMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SampleTodoMaxAggregateInput>;
}

@ObjectType()
export class SampleTodoGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    content!: string;
    @Field(() => Boolean, {nullable:false})
    editing!: boolean;
    @Field(() => Boolean, {nullable:false})
    completed!: boolean;
    @Field(() => SampleTodoCountAggregate, {nullable:true})
    _count?: InstanceType<typeof SampleTodoCountAggregate>;
    @Field(() => SampleTodoMinAggregate, {nullable:true})
    _min?: InstanceType<typeof SampleTodoMinAggregate>;
    @Field(() => SampleTodoMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof SampleTodoMaxAggregate>;
}

@InputType()
export class SampleTodoMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    editing?: true;
    @Field(() => Boolean, {nullable:true})
    completed?: true;
}

@ObjectType()
export class SampleTodoMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    content?: string;
    @Field(() => Boolean, {nullable:true})
    editing?: boolean;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
}

@InputType()
export class SampleTodoMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    editing?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    completed?: keyof typeof SortOrder;
}

@InputType()
export class SampleTodoMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    editing?: true;
    @Field(() => Boolean, {nullable:true})
    completed?: true;
}

@ObjectType()
export class SampleTodoMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    content?: string;
    @Field(() => Boolean, {nullable:true})
    editing?: boolean;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
}

@InputType()
export class SampleTodoMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    editing?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    completed?: keyof typeof SortOrder;
}

@InputType()
export class SampleTodoOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    editing?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    completed?: keyof typeof SortOrder;
    @Field(() => SampleTodoCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SampleTodoCountOrderByAggregateInput>;
    @Field(() => SampleTodoMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SampleTodoMaxOrderByAggregateInput>;
    @Field(() => SampleTodoMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SampleTodoMinOrderByAggregateInput>;
}

@InputType()
export class SampleTodoOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    editing?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    completed?: keyof typeof SortOrder;
}

@InputType()
export class SampleTodoScalarWhereWithAggregatesInput {
    @Field(() => [SampleTodoScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SampleTodoScalarWhereWithAggregatesInput>;
    @Field(() => [SampleTodoScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SampleTodoScalarWhereWithAggregatesInput>;
    @Field(() => [SampleTodoScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SampleTodoScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    editing?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    completed?: InstanceType<typeof BoolWithAggregatesFilter>;
}

@InputType()
export class SampleTodoUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    content!: string;
    @Field(() => Boolean, {nullable:false})
    editing!: boolean;
    @Field(() => Boolean, {nullable:false})
    completed!: boolean;
}

@InputType()
export class SampleTodoUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    content?: string;
    @Field(() => Boolean, {nullable:true})
    editing?: boolean;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
}

@InputType()
export class SampleTodoUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    content?: string;
    @Field(() => Boolean, {nullable:true})
    editing?: boolean;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
}

@InputType()
export class SampleTodoUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    content?: string;
    @Field(() => Boolean, {nullable:true})
    editing?: boolean;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
}

@InputType()
export class SampleTodoUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    content?: string;
    @Field(() => Boolean, {nullable:true})
    editing?: boolean;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
}

@InputType()
export class SampleTodoWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [SampleTodoWhereInput], {nullable:true})
    AND?: Array<SampleTodoWhereInput>;
    @Field(() => [SampleTodoWhereInput], {nullable:true})
    OR?: Array<SampleTodoWhereInput>;
    @Field(() => [SampleTodoWhereInput], {nullable:true})
    NOT?: Array<SampleTodoWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    content?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    editing?: InstanceType<typeof BoolFilter>;
    @Field(() => BoolFilter, {nullable:true})
    completed?: InstanceType<typeof BoolFilter>;
}

@InputType()
export class SampleTodoWhereInput {
    @Field(() => [SampleTodoWhereInput], {nullable:true})
    AND?: Array<SampleTodoWhereInput>;
    @Field(() => [SampleTodoWhereInput], {nullable:true})
    OR?: Array<SampleTodoWhereInput>;
    @Field(() => [SampleTodoWhereInput], {nullable:true})
    NOT?: Array<SampleTodoWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    content?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    editing?: InstanceType<typeof BoolFilter>;
    @Field(() => BoolFilter, {nullable:true})
    completed?: InstanceType<typeof BoolFilter>;
}

@ObjectType()
export class SampleTodo {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Boolean, {nullable:false})
    editing!: boolean;
    @Field(() => Boolean, {nullable:false})
    completed!: boolean;
}

@ArgsType()
export class UpdateManySampleTodoArgs {
    @Field(() => SampleTodoUpdateManyMutationInput, {nullable:false})
    @Type(() => SampleTodoUpdateManyMutationInput)
    data!: InstanceType<typeof SampleTodoUpdateManyMutationInput>;
    @Field(() => SampleTodoWhereInput, {nullable:true})
    @Type(() => SampleTodoWhereInput)
    where?: InstanceType<typeof SampleTodoWhereInput>;
}

@ArgsType()
export class UpdateOneSampleTodoArgs {
    @Field(() => SampleTodoUpdateInput, {nullable:false})
    @Type(() => SampleTodoUpdateInput)
    data!: InstanceType<typeof SampleTodoUpdateInput>;
    @Field(() => SampleTodoWhereUniqueInput, {nullable:false})
    @Type(() => SampleTodoWhereUniqueInput)
    where!: Prisma.AtLeast<SampleTodoWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneSampleTodoArgs {
    @Field(() => SampleTodoWhereUniqueInput, {nullable:false})
    @Type(() => SampleTodoWhereUniqueInput)
    where!: Prisma.AtLeast<SampleTodoWhereUniqueInput, 'id'>;
    @Field(() => SampleTodoCreateInput, {nullable:false})
    @Type(() => SampleTodoCreateInput)
    create!: InstanceType<typeof SampleTodoCreateInput>;
    @Field(() => SampleTodoUpdateInput, {nullable:false})
    @Type(() => SampleTodoUpdateInput)
    update!: InstanceType<typeof SampleTodoUpdateInput>;
}
