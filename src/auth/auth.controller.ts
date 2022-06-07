import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginInput } from './auth.args';

@Controller('auth')
export class AuthController {
  constructor(protected readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginInput: LoginInput) {
    return await this.authService.login(loginInput);
  }
}
