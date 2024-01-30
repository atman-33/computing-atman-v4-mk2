import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '../auth/current-user.decorator';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { CreateUserInput } from './dto/create-user-input.dto';
import { GetUserArgs } from './dto/get-user-args.dto';
import { User } from './models/user.model';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User, { name: 'createUser' })
  async createUser(@Args() createUserData: CreateUserInput) {
    return await this.usersService.createUser(createUserData);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => User, { name: 'user' })
  async getUser(@Args() getUserArgs: GetUserArgs) {
    return await this.usersService.getUser(getUserArgs);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => User, { name: 'currentUser' })
  async getCurrentUser(@CurrentUser() user: User): Promise<User> {
    return user;
  }
}
