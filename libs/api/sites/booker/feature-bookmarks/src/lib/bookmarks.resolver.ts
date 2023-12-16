import { CurrentUser, GqlAuthGuard, User } from '@libs/api/feature-auth';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BookmarksService } from './bookmarks.service';
import {
  DeleteOneBookmarkArgs,
  FindUniqueBookmarkArgs,
  UpdateOneBookmarkArgs
} from './dto/bookmark.dto';
import { CreateBookmarkInput } from './dto/create-bookmark-input.dto';
import { Bookmark } from './models/bookmark.model';

@Resolver(() => Bookmark)
export class BookmarksResolver {
  constructor(private readonly bookmarksService: BookmarksService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Bookmark)
  async createBookmark(
    @Args('data') createBookmarkData: CreateBookmarkInput,
    @CurrentUser() user: User
  ) {
    return await this.bookmarksService.createBookmark(createBookmarkData, user.id);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [Bookmark], { name: 'bookmarks' })
  async getBookmarks(@CurrentUser() user: User) {
    return await this.bookmarksService.getBookmarks(user.id);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => Bookmark, { name: 'bookmark' })
  async getBookmark(@Args() findUniqueBookmarkArgs: FindUniqueBookmarkArgs) {
    return await this.bookmarksService.getBookmark(findUniqueBookmarkArgs);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Bookmark)
  async updateBookmark(@Args() updateOneBookmarkArgs: UpdateOneBookmarkArgs) {
    return await this.bookmarksService.updateBookmark(updateOneBookmarkArgs);
  }

  /**
   * Delete Bookmark ({nullable: true} is used to return null if the bookmark is not found!)
   * @param deleteBookmarkData
   * @param user
   * @returns
   */
  @UseGuards(GqlAuthGuard)
  @Mutation(() => Bookmark, { nullable: true })
  async deleteBookmark(@Args() deleteOneBookmarkArgs: DeleteOneBookmarkArgs) {
    return await this.bookmarksService.deleteBookmark(deleteOneBookmarkArgs);
  }
}
