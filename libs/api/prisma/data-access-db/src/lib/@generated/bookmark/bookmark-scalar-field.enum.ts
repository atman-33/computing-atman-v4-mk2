import { registerEnumType } from '@nestjs/graphql';

export enum BookmarkScalarFieldEnum {
    id = "id",
    name = "name",
    userId = "userId"
}


registerEnumType(BookmarkScalarFieldEnum, { name: 'BookmarkScalarFieldEnum', description: undefined })
