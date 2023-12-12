import { registerEnumType } from '@nestjs/graphql';

export enum LinkScalarFieldEnum {
    id = "id",
    url = "url",
    title = "title",
    siteName = "siteName",
    description = "description",
    image = "image",
    bookmarkId = "bookmarkId"
}


registerEnumType(LinkScalarFieldEnum, { name: 'LinkScalarFieldEnum', description: undefined })
