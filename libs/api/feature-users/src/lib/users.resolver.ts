import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
// import { CurrentUser } from '../auth/current-user.decorator';
// import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { GetUserArgs } from './dto/args/get-user-args.dto';
import { CreateUserInput } from './dto/input/create-user-input.dto';
import { User } from './models/user.model';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Mutation(() => User)
  async createUser(@Args('createUserData') createUserData: CreateUserInput) {
    return this.userService.createUser(createUserData);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => User, { name: 'user' }) // name: graphql query name
  async getUser(@Args() getUserArgs: GetUserArgs) {
    return this.userService.getUser(getUserArgs);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => User, { name: 'currentUser' })
  async getCurrentUser(@CurrentUser() user: User): Promise<User> {
    return user;
  }
}
