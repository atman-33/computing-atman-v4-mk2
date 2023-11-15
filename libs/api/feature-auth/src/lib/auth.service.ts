import { User } from '@libs/api/feature-users';
import { env } from '@libs/shared/config';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

export interface TokenPayload {
  userId: string;
}

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(user: User, response: Response) {
    const tokenPayload: TokenPayload = {
      userId: user._id
    };

    const expires = new Date();
    // console.log(expires);
    // console.log(env.JWT_EXPIRATION);
    expires.setSeconds(expires.getSeconds() + parseInt(env.JWT_EXPIRATION, 10));
    // console.log(expires);

    const token = this.jwtService.sign(tokenPayload);
    // console.log(`login token: ${token}`);

    response.cookie('Authentication', token, {
      httpOnly: true,
      expires
    });
  }

  logout(response: Response) {
    const expires = new Date();
    // console.log(expires);
    response.cookie('Authentication', '', {
      httpOnly: true,
      expires: expires
    });
  }
}
