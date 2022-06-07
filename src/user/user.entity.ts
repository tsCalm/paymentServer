import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  Generated,
} from 'typeorm';
import { BaseEntity } from '../common/base.entity';

// 결제 시스템 관리자 페이지 접속 유저, 결제를 진행하는 유저가 아님
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
    select: false,
  })
  password: string;

  @Column()
  @Generated('uuid')
  acceccKey: string;

  @Column()
  @Generated('uuid')
  secretKey: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
