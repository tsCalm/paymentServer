import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  // constructor(
  // @InjectRepository(Payment)
  // private readonly paymentRepository: Repository<Payment>,
  // ) {}

  async findAll() {
    return null;
  }

  async findOne() {
    return null;
  }

  async create() {
    return null;
  }

  async update() {
    return null;
  }

  async delete() {
    return null;
  }
}
