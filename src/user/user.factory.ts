import { Faker } from '@faker-js/faker';
import { define } from 'typeorm-seeding';
import { User } from './user.entity';

define(User, (faker: Faker) => {
  const user = new User();

  return user;
});
