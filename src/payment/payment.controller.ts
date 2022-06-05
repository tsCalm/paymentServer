import { Controller, Get, Req, Res } from '@nestjs/common';

@Controller('payment')
export class PaymentCtrl {
  // constructor() {};

  @Get()
  test() {
    return 'test';
  }
}
