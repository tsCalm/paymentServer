import { Faker } from '@faker-js/faker';
import { define } from 'typeorm-seeding';
import { Payment } from './payment.entity';

define(Payment, (faker: Faker) => {
  const payment = new Payment();

  return payment;
});
