import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from '../common/base.entity';

// 결제 시스템 유저는 최대한 간단하게 로그인 및 어떤 유저가 결제를 진행했는지 구분하기 위한 용도
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    type: 'varchar',
  })
  email: string;

  @Column({
    type: 'varchar',
  })
  password: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
