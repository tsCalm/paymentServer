import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { Payment } from './payment.entity';

export class CreatePayment implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection.getRepository(Payment).delete({});
  }
}
