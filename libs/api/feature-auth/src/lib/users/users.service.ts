import { PrismaService } from '@libs/api/prisma/data-access-db';
import { Injectable, UnauthorizedException, UnprocessableEntityException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateOneUserArgs, FindUniqueUserArgs } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createOneUserArgs: CreateOneUserArgs) {
    await this.validateCreateUserData(createOneUserArgs);
    return await this.prisma.user.create({
      data: createOneUserArgs.data
    });
  }

  private async validateCreateUserData(createOneUserArgs: CreateOneUserArgs) {
    try {
      await this.prisma.user.findUnique({
        where: { email: createOneUserArgs.data.email }
      });
    } catch (err) {
      return;
    }
    throw new UnprocessableEntityException('Email already exists.');
  }
  async findOne(findUniqueUserArgs: FindUniqueUserArgs) {
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
