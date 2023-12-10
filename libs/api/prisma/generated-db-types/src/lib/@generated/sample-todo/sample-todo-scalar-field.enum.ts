import { registerEnumType } from '@nestjs/graphql';

export enum SampleTodoScalarFieldEnum {
    id = "id",
    content = "content",
    editing = "editing",
    completed = "completed"
}


registerEnumType(SampleTodoScalarFieldEnum, { name: 'SampleTodoScalarFieldEnum', description: undefined })
