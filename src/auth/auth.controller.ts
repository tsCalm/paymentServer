import { Body, Controller, Get, Headers, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginInput } from './auth.args';

@Controller('auth')
export class AuthController {
  constructor(protected readonly authService: AuthService) {}

  // 결제 관리자 페이지용 로그인
  @Post('login')
  async login(@Body() loginInput: LoginInput) {
    return await this.authService.login(loginInput);
  }

  // login을 하지 않고 프론트엔드에서 apiKey 값으로 토큰값을 얻음
  @Get('get-token')
  async getToken(
    @Headers('accessKey') accessKey: string,
    @Headers('secretKey') secretKey: string,
  ) {
    console.log('accessKey : ', accessKey);
    console.log('secretKey : ', secretKey);
    return await this.authService.getAccessToekn(accessKey, secretKey);
  }
}
