import { Controller, Get, Req, Res } from '@nestjs/common';

@Controller('user')
export class UserCtrl {
  // constructor() {};

  @Get()
  test() {
    return 'user';
  }
}
