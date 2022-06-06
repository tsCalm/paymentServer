import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentCtrl } from './payment.controller';
import { Payment } from './payment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Payment])],
  controllers: [PaymentCtrl],
  providers: [],
  exports: [],
})
export class paymentModule {}
