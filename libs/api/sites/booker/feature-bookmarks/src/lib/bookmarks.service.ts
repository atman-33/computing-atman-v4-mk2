import { PrismaService } from '@libs/api/prisma/data-access-db';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreateBookmarkInput } from './dto/create-bookmark-input.dto';
import { DeleteBookmarkInput } from './dto/delete-bookmark-input.dto';
import { GetBookmarkArgs } from './dto/get-bookmark-args.dto';
import { UpdateBookmarkInput } from './dto/update-bookmark-input.dto';

/**
 * Include (needed to get links)
 */
const include: Prisma.BookmarkInclude = {
  links: true
};

@Injectable()
export class BookmarksService {
  constructor(private readonly prisma: PrismaService) {}

  async createBookmark(createBookmarkData: CreateBookmarkInput, userId: string) {
    return await this.prisma.bookmark.create({
      data: {
        ...createBookmarkData,
        userId
      }
    });
  }

  async getBookmarks(userId: string) {
    return await this.prisma.bookmark.findMany({ where: { userId } });
  }

  async getBookmark(getBookmarkArgs: GetBookmarkArgs) {
    return await this.prisma.bookmark.findUnique({
      where: getBookmarkArgs.where,
      include: include
    });
  }

  async updateBookmark(updateBookmarkData: UpdateBookmarkInput) {
    return await this.prisma.bookmark.update({
      where: {
        id: updateBookmarkData.id
      },
      data: {
        name: updateBookmarkData.name
      }
    });
  }

  async deleteBookmark(deleteBookmarkData: DeleteBookmarkInput) {
    await this.prisma.link.deleteMany({
      where: {
        bookmarkId: deleteBookmarkData.where.id
      }
    });

    return await this.prisma.bookmark.delete({
      where: deleteBookmarkData.where
    });
  }
}
