import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentCtrl } from './payment.controller';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [PaymentCtrl],
  providers: [],
  exports: [],
})
export class paymentModule {}
