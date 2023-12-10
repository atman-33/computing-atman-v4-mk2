import { CurrentUser, GqlAuthGuard, User } from '@libs/api/feature-auth';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BookmarksService } from './bookmarks.service';
import { GetBookmarkArgs } from './dto/args/get-bookmark-args.dto';
import { CreateBookmarkInput } from './dto/input/create-bookmark-input.dto';
import { DeleteBookmarkInput } from './dto/input/delete-bookmark-input.dto';
import { UpdateBookmarkInput } from './dto/input/update-bookmark-input.dto';
import { Bookmark } from './models/bookmark.model';

@Resolver(() => Bookmark)
export class BookmarksResolver {
  constructor(private readonly bookmarksService: BookmarksService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Bookmark)
  async createBookmark(
    @Args('createBookmarkData') createBookmarkData: CreateBookmarkInput,
    @CurrentUser() user: User
  ) {
    return this.bookmarksService.createBookmark(createBookmarkData, user.id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Bookmark)
  async updateBookmark(
    @Args('updateBookmarkData') updateBookmarkData: UpdateBookmarkInput,
    @CurrentUser() user: User
  ) {
    return this.bookmarksService.updateBookmark(updateBookmarkData, user.id);
  }

  /**
   * Delete Bookmark ({nullable: true} is used to return null if the bookmark is not found!)
   * @param deleteBookmarkData
   * @param user
   * @returns
   */
  @UseGuards(GqlAuthGuard)
  @Mutation(() => Bookmark, { nullable: true })
  async deleteBookmark(
    @Args('deleteBookmarkData') deleteBookmarkData: DeleteBookmarkInput,
    @CurrentUser() user: User
  ) {
    return this.bookmarksService.deleteBookmark(deleteBookmarkData, user.id);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [Bookmark], { name: 'bookmarks' })
  async getBookmarks(@CurrentUser() user: User) {
    return this.bookmarksService.getBookmarks(user.id);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => Bookmark, { name: 'bookmark' })
  async getBookmark(@Args() getBookmarkArgs: GetBookmarkArgs, @CurrentUser() user: User) {
    return this.bookmarksService.getBookmark(getBookmarkArgs, user.id);
  }
}
