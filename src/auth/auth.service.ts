import { HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';
// import {
//   BaseLoginUserInput,
//   LoginUserInput,
// } from '../../../auth/dto/auth.args';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';
import { IError } from '../common/type';
import { LoginInput } from './auth.args';
// import { AdminService } from '../../../biz/admin/service/admin.service';
// import { IAdmin } from '../../../biz/admin/type/admin.type';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    protected readonly userService: UserService,
  ) {}

  generateJwtTokens = async (id: number, email: string): Promise<string> => {
    try {
      const accessTokenSecret = this.configService.get(
        'JWT_ACCESS_TOKEN_SECRET',
      );
      const token = await this.jwtService.signAsync(
        { sub: id, email },
        { secret: accessTokenSecret },
      );
      return token;
    } catch (err) {
      throw new IError(HttpStatus.BAD_REQUEST, err.message);
    }
  };

  validatePassword = async (loginUserInput: LoginInput): Promise<User> => {
    const loginUser = loginUserInput as LoginInput;
    const email = loginUser.email;
    const password = loginUser.password;

    const user = await this.userService.findOneByEmail(email);

    if (!user) throw new Error('User is not found.');

    const adminPassword = await bcrypt.compare(password, user.password);
    if (adminPassword === false) throw new Error('Password is wrong.');

    return user;
  };

  login = async (loginUserInput: LoginInput) => {
    try {
      // 1. 비밀번호 validate
      const user = await this.validatePassword(loginUserInput);
      // 2. 토큰 생성
      const token = await this.generateJwtTokens(user.id, user.email);
      // 3. token return
      return token;
    } catch (err) {
      return new IError(HttpStatus.BAD_REQUEST, err.message);
    }
  };
}
