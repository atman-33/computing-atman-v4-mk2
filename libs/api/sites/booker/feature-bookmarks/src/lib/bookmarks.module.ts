import { PrismaModule } from '@libs/api/prisma/data-access-db';
import { Module } from '@nestjs/common';
import { BookmarksResolver } from './bookmarks.resolver';
import { BookmarksService } from './bookmarks.service';

@Module({
  providers: [BookmarksResolver, BookmarksService],
  imports: [PrismaModule]
})
export class BookmarksModule {}
