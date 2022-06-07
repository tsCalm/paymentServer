import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IError } from '../common/type';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll() {
    return null;
  }

  async findOne() {
    return null;
  }

  async findOneByEmail(
    email: string,
    // options?: FindOneOptions<Admin>,
  ): Promise<User> {
    try {
      const user: User = await this.userRepository.findOne({
        where: {
          email,
        },
        select: ['password', 'email', 'id'],
      });
      return user;
    } catch (err) {
      new IError(HttpStatus.BAD_REQUEST, err.message);
    }
  }

  async findOneByKeyValue(accessKey: string, secretKey: string): Promise<User> {
    try {
      const user: User = await this.userRepository.findOne({
        where: {
          accessKey,
          secretKey,
        },
        select: ['password', 'email', 'id', 'accessKey', 'secretKey'],
      });
      console.log(user);
      if (!user) throw new Error('not found accessKey or secretKey');
      return user;
    } catch (err) {
      new IError(HttpStatus.BAD_REQUEST, err.message);
    }
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
