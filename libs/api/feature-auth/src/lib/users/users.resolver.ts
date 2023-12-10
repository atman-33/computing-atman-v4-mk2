import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '../auth/current-user.decorator';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { CreateOneUserArgs, FindUniqueUserArgs } from './dto/user.dto';
import { User } from './models/user.model';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User, { name: 'createUser' })
  async createUser(@Args('createOneUserArgs') createOneUserArgs: CreateOneUserArgs) {
    return await this.usersService.createUser(createOneUserArgs);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => User, { name: 'user' })
  async getUser(@Args('findUniqueUserArgs') findUniqueUserArgs: FindUniqueUserArgs) {
    return await this.usersService.getUser(findUniqueUserArgs);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => User, { name: 'currentUser' })
  async getCurrentUser(@CurrentUser() user: User): Promise<User> {
    return user;
  }
}
