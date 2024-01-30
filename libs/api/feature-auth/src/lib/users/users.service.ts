import { PrismaService } from '@libs/api/prisma/data-access-db';
import { Injectable, UnauthorizedException, UnprocessableEntityException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserInput } from './dto/create-user-input.dto';
import { GetUserArgs } from './dto/get-user-args.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(createUserData: CreateUserInput) {
    await this.validateCreateUserData(createUserData);
    const userData = {
      ...createUserData.data,
      password: await bcrypt.hash(createUserData.data.password, 10)
    };
    return await this.prisma.user.create({
      data: userData
    });
  }

  private async validateCreateUserData(createUserData: CreateUserInput) {
    const user = await this.prisma.user.findUnique({
      where: { email: createUserData.data.email }
    });

    if (user) {
      throw new UnprocessableEntityException('Email already exists.');
    }
  }

  async getUser(getUserArgs: GetUserArgs) {
    return await this.prisma.user.findUnique({
      where: getUserArgs.where
    });
  }

  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    const passwordIsValid = await bcrypt.compare(password, user === null ? '' : user.password);
    if (!passwordIsValid) {
      throw new UnauthorizedException('Email or password is incorrect.');
    }
    return user;
  }
}
