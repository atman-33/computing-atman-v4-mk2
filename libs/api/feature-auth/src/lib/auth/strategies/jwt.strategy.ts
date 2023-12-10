import { env } from '@libs/shared/config';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../../users/users.service';
import { TokenPayload } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => request?.cookies?.Authentication
      ]),
      secretOrKey: env.JWT_SECRET
    });
  }

  async validate({ userId }: TokenPayload) {
    return this.usersService.getUser({
      where: {
        id: userId
      }
    });
  }
}
