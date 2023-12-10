import { PrismaService } from '@libs/api/prisma/data-access-db';
import { Injectable, UnauthorizedException, UnprocessableEntityException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateOneUserArgs, FindUniqueUserArgs } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(createOneUserArgs: CreateOneUserArgs) {
    await this.validateCreateUserData(createOneUserArgs);
    const userData = {
      ...createOneUserArgs.data,
      password: await bcrypt.hash(createOneUserArgs.data.password, 10)
    };
    return await this.prisma.user.create({
      data: userData
    });
  }

  private async validateCreateUserData(createOneUserArgs: CreateOneUserArgs) {
    const user = await this.prisma.user.findUnique({
      where: { email: createOneUserArgs.data.email }
    });

    if (user) {
      throw new UnprocessableEntityException('Email already exists.');
    }
  }

  async getUser(findUniqueUserArgs: FindUniqueUserArgs) {
    return await this.prisma.user.findUnique({
      where: findUniqueUserArgs.where
    });
  }

  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    const passwordIsValid = await bcrypt.compare(password, user === null ? '' : user.password);
    if (!passwordIsValid) {
      throw new UnauthorizedException('Credentials are not valid.');
    }
    return user;
  }
}
