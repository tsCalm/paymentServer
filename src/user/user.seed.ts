import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { User } from './user.entity';
import { passwordHash } from '../utils/bcrypt';

export class CreateUser implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection.getRepository(User).delete({});
    await factory(User)().create({
      email: 'admin@gmail.com',
      password: await passwordHash('1234'),
    });
  }
}
